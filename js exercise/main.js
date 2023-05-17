let ali = [
  {
    raportDate: 1683708607288,
    raports: [
      {
        earnableItemId: "80R2EAO8B9M",
        earnedAmountTotal: 240,
        earnedAmountAvg: 120,
        currentAmountTotal: 240,
        currentAmountAvg: 120,
        _id: "645b5abf54ab98adbc3fcfbf",
      },
      {
        earnableItemId: "IQO2YEAOHE0",
        earnedAmountTotal: 5950,
        earnedAmountAvg: 2975,
        currentAmountTotal: 5070,
        currentAmountAvg: 2535,
        _id: "645b5abf54ab98adbc3fcfc0",
      },
      {
        earnableItemId: "W2CJ3Q905G4",
        earnedAmountTotal: 710,
        earnedAmountAvg: 355,
        currentAmountTotal: 710,
        currentAmountAvg: 355,
        _id: "645b5abf54ab98adbc3fcfc1",
      },
    ],
  },
  {
    raportDate: 1683708786497,
    raports: [
      {
        earnableItemId: "W2CJ3Q905G4",
        earnedAmountTotal: 710,
        earnedAmountAvg: 355,
        currentAmountTotal: 710,
        currentAmountAvg: 355,
        _id: "645b5b727bd8a51973b8e01b",
      },
      {
        earnableItemId: "80R2EAO8B9M",
        earnedAmountTotal: 240,
        earnedAmountAvg: 120,
        currentAmountTotal: 240,
        currentAmountAvg: 120,
        _id: "645b5b727bd8a51973b8e01c",
      },
      {
        earnableItemId: "IQO2YEAOHE0",
        earnedAmountTotal: 5950,
        earnedAmountAvg: 2975,
        currentAmountTotal: 5070,
        currentAmountAvg: 2535,
        _id: "645b5b727bd8a51973b8e01d",
      },
    ],
  },
];
let count = 0;
const change = (newSetId, newRaportDate) => {
  console.log(newSetId);
  console.log(newRaportDate);
};

let id = [];
let earnId = ali.find((ali) => {
  id.push(ali.raports.map((raport) => raport.earnableItemId));
  return;
});
let newId = id.flat();

let newSetId = new Set(newId);

let newRaportDate = [];
let raportDate = ali.find((alis) => {
  newRaportDate.push(alis.raportDate);
  return;
});

change(newId, newRaportDate);

console.log(ali);
console.log(count);

let result = [
  {
    raportDate: 1683708607288,
    earnableItemId: "80R2EAO8B9M",
    earnedAmountTotal: 240,
    earnedAmountAvg: 120,
    currentAmountTotal: 240,
    currentAmountAvg: 120,
  },
  {
    raportDate: 1683708786497,
    earnableItemId: "80R2EAO8B9M",
    earnedAmountTotal: 240,
    earnedAmountAvg: 120,
    currentAmountTotal: 240,
    currentAmountAvg: 120,
    _id: "645b5b727bd8a51973b8e01c",
  },
];
