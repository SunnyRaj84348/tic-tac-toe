const items = document.querySelectorAll(".items")
const players = document.querySelectorAll(".players")

let arr = new Array(9)
let fillCnt = 0
let circle = false

function setGreen(index) {
    index.forEach((i) => {
        items[i].firstElementChild.style.color = "green"
    })
}

function postGameOver() {
    players.forEach((player) => {
        player.classList.remove("animate-player")
    })

    const parent = document.querySelector(".parent")
    parent.style.pointerEvents = "none"

    const over = document.querySelector(".over")
    over.classList.add("animate-over")
}

function isCrossed(id) {
    const shape = arr[id]
    let flag = false

    if (id == 0) {
        if (arr[1] == shape && arr[2] == shape) {
            setGreen([0, 1, 2])

            flag = true
        } else if (arr[3] == shape && arr[6] == shape) {
            setGreen([0, 3, 6])

            flag = true
        } else if (arr[4] == shape && arr[8] == shape) {
            setGreen([0, 4, 8])

            flag = true
        }
    } else if (id == 1) {
        if (arr[0] == shape && arr[2] == shape) {
            setGreen([1, 0, 2])

            flag = true
        } else if (arr[4] == shape && arr[7] == shape) {
            setGreen([1, 4, 7])

            flag = true
        }
    } else if (id == 2) {
        if (arr[0] == shape && arr[1] == shape) {
            setGreen([2, 0, 1])

            flag = true
        } else if (arr[4] == shape && arr[6] == shape) {
            setGreen([2, 4, 6])

            flag = true
        } else if (arr[5] == shape && arr[8] == shape) {
            setGreen([2, 5, 8])

            flag = true
        }
    } else if (id == 3) {
        if (arr[4] == shape && arr[5] == shape) {
            setGreen([3, 4, 5])

            flag = true
        } else if (arr[0] == shape && arr[6] == shape) {
            setGreen([3, 0, 6])

            flag = true
        }
    } else if (id == 4) {
        if (arr[3] == shape && arr[5] == shape) {
            setGreen([4, 3, 5])

            flag = true
        } else if (arr[1] == shape && arr[7] == shape) {
            setGreen([4, 1, 7])

            flag = true
        } else if (arr[0] == shape && arr[8] == shape) {
            setGreen([4, 0, 8])

            flag = true
        } else if (arr[2] == shape && arr[6] == shape) {
            setGreen([4, 2, 6])

            flag = true
        }
    } else if (id == 5) {
        if (arr[3] == shape && arr[4] == shape) {
            setGreen([5, 3, 4])

            flag = true
        } else if (arr[2] == shape && arr[8] == shape) {
            setGreen([5, 2, 8])

            flag = true
        }
    } else if (id == 6) {
        if (arr[7] == shape && arr[8] == shape) {
            setGreen([6, 7, 8])

            flag = true
        } else if (arr[0] == shape && arr[3] == shape) {
            setGreen([6, 0, 3])

            flag = true
        } else if (arr[2] == shape && arr[4] == shape) {
            setGreen([6, 2, 4])

            flag = true
        }
    } else if (id == 7) {
        if (arr[6] == shape && arr[8] == shape) {
            setGreen([7, 6, 8])

            flag = true
        } else if (arr[1] == shape && arr[4] == shape) {
            setGreen([7, 1, 4])

            flag = true
        }
    } else if (id == 8) {
        if (arr[6] == shape && arr[7] == shape) {
            setGreen([8, 6, 7])

            flag = true
        } else if (arr[2] == shape && arr[5] == shape) {
            setGreen([8, 2, 5])

            flag = true
        } else if (arr[0] == shape && arr[4] == shape) {
            setGreen([8, 0, 4])

            flag = true
        }
    }

    return flag
}

function addIcon(e) {
    fillCnt++

    if (circle) {
        e.target.firstElementChild.classList.add("ph-circle")
        arr[e.target.id] = "o"

        circle = false
    } else {
        e.target.firstElementChild.classList.add("ph-x")
        arr[e.target.id] = "x"

        circle = true
    }

    players.forEach((player) => {
        player.classList.toggle("animate-player")
    })

    if (isCrossed(e.target.id)) {
        const shape = arr[e.target.id]

        if (shape == "x") {
            players[0].style.backgroundColor = "green"
            players[1].style.backgroundColor = "red"
        } else {
            players[0].style.backgroundColor = "red"
            players[1].style.backgroundColor = "green"
        }

        players.forEach((player) => {
            player.style.borderColor = "black"
        })

        postGameOver()
    }

    if (fillCnt == 9) {
        postGameOver()
    }

    e.target.removeEventListener("click", addIcon)
}

items.forEach((i) => {
    i.addEventListener("click", addIcon)
})
