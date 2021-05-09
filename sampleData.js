const boards = [
  {
    id: 1000,
    title: "Course Ideas",
    background: "#ffad33",
  },
  {
    id: 2000,
    title: "House Ideas",
    background: "#80ccff",
  },
  {
    id: 3000,
    title: "Garden Ideas",
    background: "#ff3300",
  },
];

const lists = [
  {
    id: 100,
    title: "House ideas",
    board: 1000,
    cards: [
      {
        id: 1,
        text: "card 1",
      },
      {
        id: 2,
        text: "card 2",
      },
    ],
  },
  {
    id: 200,
    title: "Travel ideas",
    board: 1000,
    cards: [
      {
        id: 3,
        text: "card 3",
      },
      {
        id: 4,
        text: "card 4",
      },
    ],
  },
];

const data = {
  boards,
  lists,
};

export default data;
