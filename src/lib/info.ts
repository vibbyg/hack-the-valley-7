export interface Info{
    content: string,
    // src to image file
    src: string,
}

export const info = {
    Protein: {
        content: 'Any of a group of complex organic macromolecules that contain carbon, hydrogen, oxygen, nitrogen, and usually sulfur and are composed of one or more chains of amino acids. Proteins are fundamental components of all living cells and include many substances, such as enzymes, hormones, and antibodies, that are necessary for the proper functioning of an organism. They are essential in the diet of animals for the growth and repair of tissue and can be obtained from foods such as meat, fish, eggs, milk, and legumes.',
        src: '',
    },
    Carbohydrates: {
        content: 'Any of a group of organic compounds that includes sugars, starches, celluloses, and gums and serves as a major energy source in the diet of animals. These compounds are produced by photosynthetic plants and contain only carbon, hydrogen, and oxygen, usually in the ratio 1:2:1. Some believe eating fewer carbohydrates is the way to optimal health, while others prefer higher-carb diets. Still, others insist moderation is the way to go. No matter where you fall in this debate, it’s hard to deny that carbohydrates play an important role in the human body.',
        src: ''
    },
    ['Bulking Phase']: {
        content: 'Bulking is a term commonly used in the weightlifting community. It generally refers to a progressive increase in the number of calories consumed beyond your body’s needs in combination with intense weight training. Whereas some people claim that bulking is unhealthy, others insist that it’s a safe and effective method for gaining muscle mass.  You’re meant to intentionally consume more calories than your body needs for a set period — often 4–6 months. These extra calories provide your body with the necessary fuel to boost muscle size and strength while weight training.',
        src: ''
    },
    ['Body Fat %']: {
        content: 'No number is a complete picture of your individual health. With that in mind, think of BMI and body fat percentage as just one way to assess and monitor your weight and overall body composition. Body fat percentage for men: Athletes: 14-20%, Fitness: 21-24%, Acceptable: 25-31%, Obesity: >32%. Body fat percentage for men: Athletes: 6-13%, Fitness: 14-17%, Acceptable: 18-24%, Obesity: >25%.',
        src: ''
    }
} as { [id: string]: Info };
