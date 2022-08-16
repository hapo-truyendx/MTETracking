const SneakerNFTType = {
  walker: 'Walker',
  jogger: 'Jogger',
  runner: 'Runner',
  trainer: 'Trainer',
};

export const convertType = num => {
  /*
    shoes[1]
        1: walker	type
    	  2: jogger
	      3: runner
	      4: trainer
    **/
   const type = typeof num === 'number' ? `${num}` : num
  switch (type) {
    case "0":
      return SneakerNFTType.walker;
    case "1":
      return SneakerNFTType.jogger;
    case "2":
      return SneakerNFTType.runner;
    case "3":
      return SneakerNFTType.trainer;
    default:
      return '';
  }
};

const SneakerPopularity = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  epic: 'Epic',
  legendary: 'Legendary',
};

export const convertPopularity = num => {
  /*
    shoes[0]
        1: common
	      2: uncommon
	      3: rare
	      4: epic
	      5: legendary
    **/
  const type = typeof num === 'number' ? `${num}` : num
  switch (type) {
    case "0":
      return SneakerPopularity.common;
    case "1":
      return SneakerPopularity.uncommon;
    case "2":
      return SneakerPopularity.rare;
    case "3":
      return SneakerPopularity.epic;
    case "4":
      return SneakerPopularity.legendary;
  }
};
