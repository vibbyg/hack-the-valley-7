export interface Info{
    content: string,
    // src to image file
    src: string,
}

export const info = {
    Calories: {
        content: 'The number of calories you should eat per day depends on numerous factors, including your age, sex, height, current weight, activity level, and metabolic health, among several others. When trying to lose weight, it’s important to create a calorie deficit by consuming fewer calories than you normally do or by exercising more. Some people choose to combine the two, eating a little less while being more physically active. A calorie is a unit of heat equal to a hundredth of the quantity of heat required to raise the temperature of 1 gram of water from 0 to 100 degrees Celcius at 1 atmosphere pressure.',
        src: '',
    },
    Protein: {
        content: 'Any of a group of complex organic macromolecules that contain carbon, hydrogen, oxygen, nitrogen, and usually sulfur and are composed of one or more chains of amino acids. Proteins are fundamental components of all living cells and include many substances, such as enzymes, hormones, and antibodies, that are necessary for the proper functioning of an organism. They are essential in the diet of animals for the growth and repair of tissue and can be obtained from foods such as meat, fish, eggs, milk, and legumes.',
        src: '',
    },
    Carbohydrates: {
        content: 'Any of a group of organic compounds that includes sugars, starches, celluloses, and gums and serves as a major energy source in the diet of animals. These compounds are produced by photosynthetic plants and contain only carbon, hydrogen, and oxygen, usually in the ratio 1:2:1. Some believe eating fewer carbohydrates is the way to optimal health, while others prefer higher-carb diets. Still, others insist moderation is the way to go. No matter where you fall in this debate, it’s hard to deny that carbohydrates play an important role in the human body.',
        src: ''
    },
    Fiber: {
        content: 'Fiber is a type of carbohydrate that the body can’t digest. Though most carbohydrates are broken down into sugar molecules called glucose, fiber cannot be broken down into sugar molecules, and instead it passes through the body undigested. Fiber helps regulate the body’s use of sugars, helping to keep hunger and blood sugar in check. It’s split into two broad categories based on its water solubility: Soluble fiber and Insoluble fiber.',
        src: ''
    },
    ['Gain Phase']: {
        content: 'Bulking is a term commonly thrown around by bodybuilders. It generally refers to a progressive increase in the number of calories consumed beyond your body’s needs in combination with intense weight training. Whereas some people claim that bulking is unhealthy, others insist that it’s a safe and effective method for gaining muscle mass.  You’re meant to intentionally consume more calories than your body needs for a set period — often 4–6 months. These extra calories provide your body with the necessary fuel to boost muscle size and strength while weight training.',
        src: ''
    },
    ['Cut Phase']: {
        content: 'The cutting phase is usually completed within 4 to 12 weeks. Many athletes prefer to do it during the heavy winter months. This phase includes – as in the bulking phase – a nutrition and physical activity program designed for this phase. The goal of this diet is to reduce body fat dramatically, the so-called “complete drying” in the gym. For performing an effective cutting cycle you need to limit the caloric intake in the diet followed so the body seeks the energy needed from the fat stored in its fat spots. If a man has more than 15% body fat and a woman more than 25% respectively, then they should be in a cutting phase. This creates an easier situation where muscles are clearly outlined in the body, rather than hiding under a layer of fat.',
        src: ''
    },
    ['Body Fat %']: {
        content: 'No number is a complete picture of your individual health. With that in mind, think of BMI and body fat percentage as just one way to assess and monitor your weight and overall body composition. Body fat percentage for men: Athletes: 14-20%, Fitness: 21-24%, Acceptable: 25-31%, Obesity: >32%. Body fat percentage for men: Athletes: 6-13%, Fitness: 14-17%, Acceptable: 18-24%, Obesity: >25%.',
        src: ''
    },
    ['Maintenance Calories']: {
        content: 'Mantainance calories is the exact amount of calories need to maintain one\'s current weight, not lose weight and not gain weight. To calculate this figure, use the formulas: Basal Metabolic Rate: BMR (kcal/day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (years) – 161. Total energy requirement: TDEE (kcal/day) = BMR * PAL, which is the amount of calories needed to maintain weight. 10-35% of energy should come from protein. 45-65% of energy should come from carbohydrates. 20-35% of energy should come from fat.',
        src: ''
    }
} as { [id: string]: Info };