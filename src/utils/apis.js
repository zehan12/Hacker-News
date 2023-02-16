const BASE_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

const getStory = async (id) => {
  try {
    const story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const data = await story.json();
    return data;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async () => {
  try {
    const response = await fetch(BASE_URL);
    const storyIds = await response.json();
    const stories = await Promise.all(storyIds.slice(0, 16).map(getStory));
    const res = stories.map(story =>  {
      return {...story, starred: false}
  });
    return res;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};