import { getComment } from "./getComment";

    export const counter = async (id) => {
        const comments = await getComment(id);
      return comments.length;
    };

