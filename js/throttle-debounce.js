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



