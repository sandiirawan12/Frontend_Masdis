export const events = [
    {
        title: "Bali Trail Running Challenge",
        start: new Date(2022, 5, 15),
        end: new Date(2022, 5, 15),
    },
    {
        title: "Gempita Run",
        start: new Date(2022, 5, 21),
        end: new Date(2022, 5, 21),
    },
    {
        title: "Detrac Ultra",
        start: new Date(2022, 5, 21),
        end: new Date(2022, 5, 21),
    },
    {
        title: "Hutan Hujan Fun Trail Running",
        start: new Date(2022, 5, 21),
        end: new Date(2022, 5, 21),
    },
    {
        title: "Sari Ater Jambore Trail Run",
        start: new Date(2022, 5, 22),
        end: new Date(2022, 5, 22),
    },
    {
        title: "Bukit Lawang Jungle Trail Run",
        start: new Date(2022, 5, 27),
        end: new Date(2022, 5, 27),
    },
].map((event, index) => ({ ...event, id: index }))