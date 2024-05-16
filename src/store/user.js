import { get, writable } from "svelte/store";

const user = null;
const stats = null;
const USER_STORE_KEY = 'USER_INFO';

export default function createUserStore() {
    let userInfo = window.localStorage.getItem(USER_STORE_KEY);

    const { set: storeSet, subscribe } = writable({ ...(Boolean(userInfo) ? JSON.parse(userInfo) : { user, stats }) });

    return {
        set: ({ user = null, stats = null } = {}) => {
            const current = get(this);
            const newValue = { ...current, ...(user && { user }), ...(stats && { stats }) };
            window.localStorage.setItem(USER_STORE_KEY, JSON.stringify(newValue));
            storeSet(newValue);
        },
        subscribe,
        login(name) {
            this.set({ user: { name } });
        },
        logout() {
            storeSet({ user: null, stats: null });
            window.localStorage.removeItem(USER_STORE_KEY);
        }
    };

}; 