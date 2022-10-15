export interface Info{
    content: string,
    // src to image file
    src: string,
}

export const info = {
    Calories: {
        content: 'Bacon ipsum dolor amet buffalo brisket shank salami bresaola ribeye. Ham hock capicola boudin, cow turducken short loin beef ribs beef shank venison doner strip steak brisket landjaeger spare ribs. Sausage short ribs short loin ball tip tenderloin burgdoggen. Burgdoggen swine ground round meatloaf, strip steak frankfurter cow ham hock rump venison fatback landjaeger leberkas boudin short loin. Filet mignon biltong shankle spare ribs bacon short loin.',
        src: '',
    },
    Protein: {
        content: 'Chislic meatball tenderloin andouille brisket chuck turducken shank venison. Doner pig turducken shoulder pork chop spare ribs cupim cow ribeye. Short loin chislic fatback tenderloin, capicola salami kielbasa strip steak shank tail swine beef ribs. Tri-tip pancetta cow pork alcatra andouille. Tri-tip pastrami sausage burgdoggen, prosciutto turkey frankfurter spare ribs chicken flank shankle chuck landjaeger ball tip. Kielbasa short loin short ribs salami venison, picanha pork belly capicola shank kevin ham beef ribs. Beef ribs hamburger beef landjaeger, ribeye leberkas prosciutto shoulder tenderloin bacon sausage doner short loin chislic t-bone.',
        src: '',
    },
    Carbohydrates: {
        content: 'Pig flank brisket, jowl porchetta turkey frankfurter meatloaf chuck alcatra buffalo pancetta. Tail short ribs capicola meatloaf. Chislic tail beef ribs pig pastrami jerky, kevin shankle pancetta cow brisket ham hock short loin. Venison buffalo cupim t-bone pork loin rump bacon. Cupim shankle pig ground round hamburger flank, pork bresaola venison.',
        src: ''
    },
    Fiber: {
        content: 'Drumstick pig boudin andouille, tail salami spare ribs rump pork belly ham hock. Kevin meatloaf fatback picanha sausage burgdoggen, drumstick tail sirloin pork belly boudin jowl ball tip flank. Cupim drumstick meatball landjaeger fatback. Ball tip short loin capicola andouille beef ribs landjaeger pancetta pork belly picanha brisket burgdoggen. Kielbasa kevin andouille jerky chislic. Biltong jerky pork loin, tongue short ribs meatloaf boudin sausage shank filet mignon.',
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