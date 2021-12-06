const accordeon = document.getElementById('accordeon')

function accordeonInit(accordeon) {
        const spoilers = accordeon.querySelectorAll('.spoiler-js');

        spoilers.forEach(function (spoiler) {
            spoiler.onclick = function spoilerHandler(e) {
                if(e.target.classList.contains('spoiler__btn') && e.target.closest('.spoiler.collapsed') !== null) {
                    deploy(e.target.closest('.spoiler.collapsed'))
                    spoilers.forEach(function (spoiler2) {
                        if (spoiler2 !== spoiler && spoiler2.closest('.spoiler.deployed') !== null) {
                            setTimeout(collapse, 210, spoiler2);
                        }
                    })

                } else if (e.target.classList.contains('spoiler__btn') && e.target.closest('.spoiler.deployed') !== null) {
                    collapse(e.target.closest('.spoiler.deployed'))
                }
            }
        })
}

accordeonInit(accordeon)

function deploy(targetSpoiler) {
    targetSpoiler.classList.remove('collapsed')
    targetSpoiler.classList.add('deployed')
}

function collapse(targetSpoiler) {
    targetSpoiler.classList.remove('deployed')
    targetSpoiler.classList.add('collapsed')
}

