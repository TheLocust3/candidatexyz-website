import $ from 'jquery';

let SignUpApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/sign_ups', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/sign_ups/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(email, reason) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/sign_ups', {
                type: 'post',
                data: { email: email, reason: reason },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/sign_ups/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default SignUpApi;
