let formatTitle = title => {
    const newTitle = title.split(" ").join("-");
    return newTitle.toLowerCase();
}

export default formatTitle;

