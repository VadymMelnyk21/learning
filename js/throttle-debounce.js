const vanillaOutput = document.querySelector('.output.vanilla');
// console.log(vanillaOutput);
const throttledOutput = document.querySelector('.output.throttled');
// console.log(throttledOutput);
const trailingOutput = document.querySelector('.output.trailing');
// console.log(trailingOutput);
const leadingOutput = document.querySelector('.output.leading');
// console.log(leadingOutput);

const eventCounter = {
    vanilla: 0,
    throttled: 0,
    trailing: 0,
    leading: 0
};

//  vanilla
document.addEventListener(
    'scroll', () => {
        eventCounter.vanilla += 1;
        vanillaOutput.textContent = eventCounter.vanilla;
    }
);

// throttled
document.addEventListener(
    'scroll',
    _.throttle(() => {
        eventCounter.throttled += 1;
        throttledOutput.textContent = eventCounter.throttled;
    }, 300)
);

// trailing
document.addEventListener(
    'scroll',
    _.debounce(() => {
        eventCounter.trailing += 1;
        trailingOutput.textContent = eventCounter.trailing;
    }, 300)
);

// leading
document.addEventListener(
    'scroll',
    _.debounce(() => {
        eventCounter.leading += 1;
        leadingOutput.textContent = eventCounter.leading;
    }, 300,
        {
            trailing: false, leading: true
        }
    )
);

// mouse
const mouseOutput = document.querySelector('.output.mouse');
const moeThrottle = document.querySelector('.output.mouse-trailing');
const mouseDebounce = document.querySelector('.output.mouse-debounce');


const eventMove = {
    move: 0,
    moveThrottle: 0,
    moveDebounce: 0,
};

document.addEventListener(
    'mousemove',
    () => {
        eventMove.move += 1;
        mouseOutput.textContent = eventMove.move;
    }
);

document.addEventListener(
    'mousemove',
    _.throttle(() => {
        eventMove.moveThrottle += 1;
        moeThrottle.textContent = eventMove.moveThrottle;
    }, 300,)
);


document.addEventListener(
    'mousemove',
    _.debounce(() => {
        eventMove.moveDebounce += 1;
        mouseDebounce.textContent = eventMove.moveDebounce;
    }, 300,
        // {
        //     trailing: false, leading: true,
        // }
    )
);

// button

const buttonOutput = document.querySelector('.output.but-on');
let nazhat = 0;

document.addEventListener(
    'keydown',
    () => {
        nazhat += 1;
        buttonOutput.textContent = nazhat;
    }
)
