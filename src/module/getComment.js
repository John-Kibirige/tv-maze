const commenuURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/W1bATIF3NbkGkB344Lpb/comments";
export let getComment = async (id) => {
  try {
    const result = await fetch(commenuURL + `?item_id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const comments = await result.json();
    if (comments["error"]) {
      return [];
    } else return comments;
  } catch (error) {}
};
