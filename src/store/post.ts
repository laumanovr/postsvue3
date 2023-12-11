import {defineStore} from "pinia";
import {IPost} from "@/interfaces/IPost";
import {sendGetRequest, sendPostRequest} from "@/api/api";

export const usePostStore = defineStore({
    id: "postStore",
    state: () => ({
        posts: [] as IPost[],
    }),
    actions: {
        async fetchPosts() {
            try {
                this.posts = await sendGetRequest('posts');
            } catch (err) {
                console.log(err);
            }
        },

        async createPost(payload: object) {
            try {
                return await sendPostRequest('posts', payload);
            } catch (err) {
                return Promise.reject(err);
            }
        },
    },
    getters: {
        allPosts: (state) => [...state.posts]
    }
});
