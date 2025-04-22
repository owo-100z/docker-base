import { axiosCall } from '@/services/api';

const apiCall = async (option, succ, fail) => {
    await axiosCall(
        option?.method,
        option?.url,
        option?.data,
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                timeout: 30000,
                //authorization: `Bearer ${token}` // 토큰
            },
            params: option?.params
        }
    )
    .then((res) => succ(res))
    .catch((err) => fail(err));
}

const comm = {
    get: async (option, succ, fail) => {
        const _option = {
            ...option,
            method: 'get',
            params: {...option?.params},
            data: {}
        }
        await apiCall(_option, succ, fail);
    },
    post: async (option, succ, fail) => {
        const _option = {
            ...option,
            method: 'post',
            params: {},
            data: {...option?.params},
        }
        await apiCall(_option, succ, fail);
    },
    put: async (option, succ, fail) => {
        const _option = {
            ...option,
            method: 'put',
            params: {},
            data: {...option?.params},
        }
        await apiCall(_option, succ, fail);
    },
    del: async (option, succ, fail) => {
        const _option = {
            ...option,
            method: 'delete',
            params: {...option?.params},
            data: {}
        }
        await apiCall(_option, succ, fail);
    },
    isEmpty: (value) => {
        if (value == null) return true;
        if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
        if (typeof value === 'object') return Object.keys(value).length === 0;

        return false;
    }
}

export {comm}