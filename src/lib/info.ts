export interface Info{
    content: string,
    // src to image file
    src: string,
}

export const info = {
    Calories: {
        content: 'A calorie is a unit of heat equal to a hundredth of the quantity of heat required to raise the temperature of 1 gram of water from 0 to 100 degrees Celcius at 1 atmosphere pressure.',
        src: '',
    },
    Protein: {
        content: 'Any of a group of complex organic macromolecules that contain carbon, hydrogen, oxygen, nitrogen, and usually sulfur and are composed of one or more chains of amino acids. Proteins are fundamental components of all living cells and include many substances, such as enzymes, hormones, and antibodies, that are necessary for the proper functioning of an organism. They are essential in the diet of animals for the growth and repair of tissue and can be obtained from foods such as meat, fish, eggs, milk, and legumes.',
        src: '',
    },
    Carbohydrates: {
        content: 'Any of a group of organic compounds that includes sugars, starches, celluloses, and gums and serves as a major energy source in the diet of animals. These compounds are produced by photosynthetic plants and contain only carbon, hydrogen, and oxygen, usually in the ratio 1:2:1.',
        src: ''
    },
    Fiber: {
        content: 'Fiber is a type of carbohydrate that the body can’t digest. Though most carbohydrates are broken down into sugar molecules called glucose, fiber cannot be broken down into sugar molecules, and instead it passes through the body undigested. Fiber helps regulate the body’s use of sugars, helping to keep hunger and blood sugar in check.',
        src: ''
    },
    ['Gain Phase']: {
        content: 'Chicken beef ribs flank buffalo pork belly meatball jowl ball tip t-bone venison short ribs. Ground round tenderloin t-bone pork belly, strip steak salami andouille venison. Capicola tongue jowl short ribs boudin, sirloin meatball t-bone meatloaf corned beef andouille. Flank cupim prosciutto chuck alcatra filet mignon pork chop porchetta meatball turkey pork loin beef chicken.',
        src: ''
    },
    ['Cut Phase']: {
        content: '',
        src: ''
    },
    ['Body Fat %']: {
        content: '',
        src: ''
    },
    ['Maintenance Calories']: {
        content: '',
        src: ''
    }
} as { [id: string]: Info };