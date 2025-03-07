const { createApp } = Vue;

const app = createApp({
    methods: {
        login() {
            window.location.href = "/.auth/login/aad";
        },
        logout() {
            window.location.href = "/.auth/logout";
        }
    }
});

app.mount("#app");
