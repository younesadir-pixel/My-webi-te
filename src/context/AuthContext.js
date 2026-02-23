import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

/* ─── Helpers localStorage ─── */
const USERS_KEY = 'fp_users';
const SESSION_KEY = 'fp_current_user';

const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
const saveUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users));
const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
const saveSession = (user) => localStorage.setItem(SESSION_KEY, JSON.stringify(user));
const clearSession = () => localStorage.removeItem(SESSION_KEY);

/* Generate a fake token */
const makeToken = (email) => btoa(`fp:${email}:${Date.now()}`);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    /* Restore session on mount */
    useEffect(() => {
        const session = getSession();
        if (session) {
            setUser(session.user);
            setToken(session.token);
        }
        setLoading(false);
    }, []);

    const login = (authToken, userData) => {
        setToken(authToken);
        setUser(userData);
        saveSession({ token: authToken, user: userData });
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        clearSession();
    };

    /* Exposed helpers for Register / Login components */
    const registerUser = ({ firstname, lastname, email, password }) => {
        const users = getUsers();
        if (users.find(u => u.email === email)) {
            return { ok: false, message: 'Un compte avec cet email existe déjà.' };
        }
        const newUser = { id: Date.now(), firstname, lastname, email, password };
        saveUsers([...users, newUser]);
        const tok = makeToken(email);
        login(tok, { id: newUser.id, firstname, lastname, email });
        return { ok: true };
    };

    const loginUser = ({ email, password }) => {
        const users = getUsers();
        const found = users.find(u => u.email === email && u.password === password);
        if (!found) {
            return { ok: false, message: 'Email ou mot de passe incorrect.' };
        }
        const tok = makeToken(email);
        login(tok, { id: found.id, firstname: found.firstname, lastname: found.lastname, email });
        return { ok: true };
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading, registerUser, loginUser }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
