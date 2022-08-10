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
  switch (num) {
    case 1:
      return SneakerNFTType.walker;
    case 2:
      return SneakerNFTType.jogger;
    case 3:
      return SneakerNFTType.runner;
    case 4:
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
  switch (num) {
    case 1:
      return SneakerPopularity.common;
    case 2:
      return SneakerPopularity.uncommon;
    case 3:
      return SneakerPopularity.rare;
    case 4:
      return SneakerPopularity.epic;
    case 5:
      return SneakerPopularity.legendary;
    default:
      return '';
  }
};
