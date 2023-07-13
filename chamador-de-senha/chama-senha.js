// TABS
function abreTratamento(evt, tratamentoNome) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }
  document.getElementById(tratamentoNome).style.display = "block"
  evt.currentTarget.className += " active"
}

// XAMA
const vSenhaNormalXama = document.querySelector("#senha-normal-xama")
const vSenhaPreferencialXama = document.querySelector(
  "#senha-preferencial-xama"
)

let senhaNormalXama = localStorage.getItem("senhaNormalXama")
let senhaPreferencialXama = localStorage.getItem("senhaPreferencialXama")

if (!senhaNormalXama) senhaNormalXama = 0
if (!senhaPreferencialXama) senhaPreferencialXama = 0
mostrarSenhaXama()

// Soma Xama

document.getElementById("sum-normal-xama").addEventListener("click", () => {
  let normalValueXama = document.getElementById("normal-calc-xama").value
  normalValueXama.length !== 0
    ? (normalValueXama = parseInt(normalValueXama))
    : (normalValueXama = 0)
  senhaNormalXama = senhaNormalXama + normalValueXama
  document.getElementById("normal-calc-xama").value = ""
  mostrarSenhaXama()
})
document
  .getElementById("sum-preferencial-xama")
  .addEventListener("click", () => {
    let preferencialValueXama = document.getElementById(
      "preferencial-calc-xama"
    ).value

    preferencialValueXama.length !== 0
      ? (preferencialValueXama = parseInt(preferencialValueXama))
      : (preferencialValueXama = 0)
    senhaPreferencialXama = senhaPreferencialXama + preferencialValueXama
    document.getElementById("preferencial-calc-xama").value = ""
    mostrarSenhaXama()
  })

// Subtrai Xama
document.getElementById("sub-normal-xama").addEventListener("click", () => {
  let normalValueXama = document.getElementById("normal-calc-xama").value

  normalValueXama.length !== 0
    ? (normalValueXama = parseInt(normalValueXama))
    : (normalValueXama = 0)
  senhaNormalXama = senhaNormalXama - normalValueXama
  document.getElementById("normal-calc-xama").value = ""
  mostrarSenhaXama()
})
document
  .getElementById("sub-preferencial-xama")
  .addEventListener("click", () => {
    let preferencialValueXama = document.getElementById(
      "preferencial-calc-xama"
    ).value

    preferencialValueXama.length !== 0
      ? (preferencialValueXama = parseInt(preferencialValueXama))
      : (preferencialValueXama = 0)
    senhaPreferencialXama = senhaPreferencialXama - preferencialValueXama
    document.getElementById("preferencial-calc-xama").value = ""
    mostrarSenhaXama()
  })

// ZERA XAMA
document.getElementById("zerar-normal-xama").addEventListener("click", () => {
  senhaNormalXama = 0
  mostrarSenhaXama()
})
document
  .getElementById("zerar-preferencial-xama")
  .addEventListener("click", () => {
    senhaPreferencialXama = 0
    mostrarSenhaXama()
  })

function mostrarSenhaXama() {
  vSenhaNormalXama.innerHTML =
    "N" +
    parseInt(senhaNormalXama).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialXama.innerHTML =
    "P" +
    parseInt(senhaPreferencialXama).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// TERAPEUTICA
const vSenhaNormalTerapeutica = document.querySelector(
  "#senha-normal-terapeutica"
)
const vSenhaPreferencialTerapeutica = document.querySelector(
  "#senha-preferencial-terapeutica"
)

let senhaNormalTerapeutica = localStorage.getItem("senhaNormalTerapeutica")
let senhaPreferencialTerapeutica = localStorage.getItem(
  "senhaPreferencialTerapeutica"
)

if (!senhaNormalTerapeutica) senhaNormalTerapeutica = 0
if (!senhaPreferencialTerapeutica) senhaPreferencialTerapeutica = 0
mostrarSenhaTerapeutica()

// Soma Terapeutica
document
  .getElementById("sum-normal-terapeutica")
  .addEventListener("click", () => {
    let normalValueTerapeutica = document.getElementById(
      "normal-calc-terapeutica"
    ).value

    normalValueTerapeutica.length !== 0
      ? (normalValueTerapeutica = parseInt(normalValueTerapeutica))
      : (normalValueTerapeutica = 0)
    senhaNormalTerapeutica = senhaNormalTerapeutica + normalValueTerapeutica
    document.getElementById("normal-calc-terapeutica").value = ""
    mostrarSenhaTerapeutica()
  })
document
  .getElementById("sum-preferencial-terapeutica")
  .addEventListener("click", () => {
    let preferencialValueTerapeutica = document.getElementById(
      "preferencial-calc-terapeutica"
    ).value

    preferencialValueTerapeutica.length !== 0
      ? (preferencialValueTerapeutica = parseInt(preferencialValueTerapeutica))
      : (preferencialValueTerapeutica = 0)
    senhaPreferencialTerapeutica =
      senhaPreferencialTerapeutica + preferencialValueTerapeutica
    document.getElementById("preferencial-calc-terapeutica").value = ""
    mostrarSenhaTerapeutica()
  })

// Subtrai Terapeutica
document
  .getElementById("sub-normal-terapeutica")
  .addEventListener("click", () => {
    let normalValueTerapeutica = document.getElementById(
      "normal-calc-terapeutica"
    ).value

    normalValueTerapeutica.length !== 0
      ? (normalValueTerapeutica = parseInt(normalValueTerapeutica))
      : (normalValueTerapeutica = 0)
    senhaNormalTerapeutica = senhaNormalTerapeutica - normalValueTerapeutica
    document.getElementById("normal-calc-terapeutica").value = ""
    mostrarSenhaTerapeutica()
  })
document
  .getElementById("sub-preferencial-terapeutica")
  .addEventListener("click", () => {
    let preferencialValueTerapeutica = document.getElementById(
      "preferencial-calc-terapeutica"
    ).value

    preferencialValueTerapeutica.length !== 0
      ? (preferencialValueTerapeutica = parseInt(preferencialValueTerapeutica))
      : (preferencialValueTerapeutica = 0)
    senhaPreferencialTerapeutica =
      senhaPreferencialTerapeutica - preferencialValueTerapeutica
    document.getElementById("preferencial-calc-terapeutica").value = ""
    mostrarSenhaTerapeutica()
  })

// ZERA Terapeutica
document
  .getElementById("zerar-normal-terapeutica")
  .addEventListener("click", () => {
    senhaNormalTerapeutica = 0
    mostrarSenhaTerapeutica()
  })
document
  .getElementById("zerar-preferencial-terapeutica")
  .addEventListener("click", () => {
    senhaPreferencialTerapeutica = 0
    mostrarSenhaTerapeutica()
  })

function mostrarSenhaTerapeutica() {
  vSenhaNormalTerapeutica.innerHTML =
    "N" +
    parseInt(senhaNormalTerapeutica).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialTerapeutica.innerHTML =
    "P" +
    parseInt(senhaPreferencialTerapeutica).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// REIKI
const vSenhaNormalReiki = document.querySelector("#senha-normal-reiki")
const vSenhaPreferencialReiki = document.querySelector(
  "#senha-preferencial-reiki"
)

let senhaNormalReiki = localStorage.getItem("senhaNormalReiki")
let senhaPreferencialReiki = localStorage.getItem("senhaPreferencialReiki")

if (!senhaNormalReiki) senhaNormalReiki = 0
if (!senhaPreferencialReiki) senhaPreferencialReiki = 0
mostrarSenhaReiki()

// Soma Reiki
document.getElementById("sum-normal-reiki").addEventListener("click", () => {
  let normalValueReiki = document.getElementById("normal-calc-reiki").value

  normalValueReiki.length !== 0
    ? (normalValueReiki = parseInt(normalValueReiki))
    : (normalValueReiki = 0)
  senhaNormalReiki = senhaNormalReiki + normalValueReiki
  document.getElementById("normal-calc-reiki").value = ""
  mostrarSenhaReiki()
})
document
  .getElementById("sum-preferencial-reiki")
  .addEventListener("click", () => {
    let preferencialValueReiki = document.getElementById(
      "preferencial-calc-reiki"
    ).value

    preferencialValueReiki.length !== 0
      ? (preferencialValueReiki = parseInt(preferencialValueReiki))
      : (preferencialValueReiki = 0)
    senhaPreferencialReiki = senhaPreferencialReiki + preferencialValueReiki
    document.getElementById("preferencial-calc-reiki").value = ""
    mostrarSenhaReiki()
  })

// Subtrai Reiki
document.getElementById("sub-normal-reiki").addEventListener("click", () => {
  let normalValueReiki = document.getElementById("normal-calc-reiki").value

  normalValueReiki.length !== 0
    ? (normalValueReiki = parseInt(normalValueReiki))
    : (normalValueReiki = 0)
  senhaNormalReiki = senhaNormalReiki - normalValueReiki
  document.getElementById("normal-calc-reiki").value = ""
  mostrarSenhaReiki()
})
document
  .getElementById("sub-preferencial-reiki")
  .addEventListener("click", () => {
    let preferencialValueReiki = document.getElementById(
      "preferencial-calc-reiki"
    ).value

    preferencialValueReiki.length !== 0
      ? (preferencialValueReiki = parseInt(preferencialValueReiki))
      : (preferencialValueReiki = 0)
    senhaPreferencialReiki = senhaPreferencialReiki - preferencialValueReiki
    document.getElementById("preferencial-calc-reiki").value = ""
    mostrarSenhaReiki()
  })

// ZERA Reiki
document.getElementById("zerar-normal-reiki").addEventListener("click", () => {
  senhaNormalReiki = 0
  mostrarSenhaReiki()
})
document
  .getElementById("zerar-preferencial-reiki")
  .addEventListener("click", () => {
    senhaPreferencialReiki = 0
    mostrarSenhaReiki()
  })

function mostrarSenhaReiki() {
  vSenhaNormalReiki.innerHTML =
    "N" +
    parseInt(senhaNormalReiki).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialReiki.innerHTML =
    "P" +
    parseInt(senhaPreferencialReiki).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// ILUMINAÇÃO E CURA
const vSenhaNormalIluminacao = document.querySelector(
  "#senha-normal-iluminacao"
)
const vSenhaPreferencialIluminacao = document.querySelector(
  "#senha-preferencial-iluminacao"
)

let senhaNormalIluminacao = localStorage.getItem("senhaNormalIluminacao")
let senhaPreferencialIluminacao = localStorage.getItem(
  "senhaPreferencialIluminacao"
)

if (!senhaNormalIluminacao) senhaNormalIluminacao = 0
if (!senhaPreferencialIluminacao) senhaPreferencialIluminacao = 0
mostrarSenhaIluminacao()

// Soma Iluminacao
document
  .getElementById("sum-normal-iluminacao")
  .addEventListener("click", () => {
    let normalValueIluminacao = document.getElementById(
      "normal-calc-iluminacao"
    ).value

    normalValueIluminacao.length !== 0
      ? (normalValueIluminacao = parseInt(normalValueIluminacao))
      : (normalValueIluminacao = 0)
    senhaNormalIluminacao = senhaNormalIluminacao + normalValueIluminacao
    document.getElementById("normal-calc-iluminacao").value = ""
    mostrarSenhaIluminacao()
  })
document
  .getElementById("sum-preferencial-iluminacao")
  .addEventListener("click", () => {
    let preferencialValueIluminacao = document.getElementById(
      "preferencial-calc-iluminacao"
    ).value

    preferencialValueIluminacao.length !== 0
      ? (preferencialValueIluminacao = parseInt(preferencialValueIluminacao))
      : (preferencialValueIluminacao = 0)
    senhaPreferencialIluminacao =
      senhaPreferencialIluminacao + preferencialValueIluminacao
    document.getElementById("preferencial-calc-iluminacao").value = ""
    mostrarSenhaIluminacao()
  })

// Subtrai Iluminacao
document
  .getElementById("sub-normal-iluminacao")
  .addEventListener("click", () => {
    let normalValueIluminacao = document.getElementById(
      "normal-calc-iluminacao"
    ).value

    normalValueIluminacao.length !== 0
      ? (normalValueIluminacao = parseInt(normalValueIluminacao))
      : (normalValueIluminacao = 0)
    senhaNormalIluminacao = senhaNormalIluminacao - normalValueIluminacao
    document.getElementById("normal-calc-iluminacao").value = ""
    mostrarSenhaIluminacao()
  })
document
  .getElementById("sub-preferencial-iluminacao")
  .addEventListener("click", () => {
    let preferencialValueIluminacao = document.getElementById(
      "preferencial-calc-iluminacao"
    ).value

    preferencialValueIluminacao.length !== 0
      ? (preferencialValueIluminacao = parseInt(preferencialValueIluminacao))
      : (preferencialValueIluminacao = 0)
    senhaPreferencialIluminacao =
      senhaPreferencialIluminacao - preferencialValueIluminacao
    document.getElementById("preferencial-calc-iluminacao").value = ""
    mostrarSenhaIluminacao()
  })

// ZERA Iluminacao
document
  .getElementById("zerar-normal-iluminacao")
  .addEventListener("click", () => {
    senhaNormalIluminacao = 0
    mostrarSenhaIluminacao()
  })
document
  .getElementById("zerar-preferencial-iluminacao")
  .addEventListener("click", () => {
    senhaPreferencialIluminacao = 0
    mostrarSenhaIluminacao()
  })

function mostrarSenhaIluminacao() {
  vSenhaNormalIluminacao.innerHTML =
    "N" +
    parseInt(senhaNormalIluminacao).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialIluminacao.innerHTML =
    "P" +
    parseInt(senhaPreferencialIluminacao).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// SÍRIUS
const vSenhaNormalSirius = document.querySelector("#senha-normal-sirius")
const vSenhaPreferencialSirius = document.querySelector(
  "#senha-preferencial-sirius"
)

let senhaNormalSirius = localStorage.getItem("senhaNormalSirius")
let senhaPreferencialSirius = localStorage.getItem("senhaPreferencialSirius")

if (!senhaNormalSirius) senhaNormalSirius = 0
if (!senhaPreferencialSirius) senhaPreferencialSirius = 0
mostrarSenhaSirius()

// Soma Sirius
document.getElementById("sum-normal-sirius").addEventListener("click", () => {
  let normalValueSirius = document.getElementById("normal-calc-sirius").value

  normalValueSirius.length !== 0
    ? (normalValueSirius = parseInt(normalValueSirius))
    : (normalValueSirius = 0)
  senhaNormalSirius = senhaNormalSirius + normalValueSirius
  document.getElementById("normal-calc-sirius").value = ""
  mostrarSenhaSirius()
})
document
  .getElementById("sum-preferencial-sirius")
  .addEventListener("click", () => {
    let preferencialValueSirius = document.getElementById(
      "preferencial-calc-sirius"
    ).value

    preferencialValueSirius.length !== 0
      ? (preferencialValueSirius = parseInt(preferencialValueSirius))
      : (preferencialValueSirius = 0)
    senhaPreferencialSirius = senhaPreferencialSirius + preferencialValueSirius
    document.getElementById("preferencial-calc-sirius").value = ""
    mostrarSenhaSirius()
  })

// Subtrai Sirius
document.getElementById("sub-normal-sirius").addEventListener("click", () => {
  let normalValueSirius = document.getElementById("normal-calc-sirius").value

  normalValueSirius.length !== 0
    ? (normalValueSirius = parseInt(normalValueSirius))
    : (normalValueSirius = 0)
  senhaNormalSirius = senhaNormalSirius - normalValueSirius
  document.getElementById("normal-calc-sirius").value = ""
  mostrarSenhaSirius()
})
document
  .getElementById("sub-preferencial-sirius")
  .addEventListener("click", () => {
    let preferencialValueSirius = document.getElementById(
      "preferencial-calc-sirius"
    ).value

    preferencialValueSirius.length !== 0
      ? (preferencialValueSirius = parseInt(preferencialValueSirius))
      : (preferencialValueSirius = 0)
    senhaPreferencialSirius = senhaPreferencialSirius - preferencialValueSirius
    document.getElementById("preferencial-calc-sirius").value = ""
    mostrarSenhaSirius()
  })

// ZERA Sirius
document.getElementById("zerar-normal-sirius").addEventListener("click", () => {
  senhaNormalSirius = 0
  mostrarSenhaSirius()
})
document
  .getElementById("zerar-preferencial-sirius")
  .addEventListener("click", () => {
    senhaPreferencialSirius = 0
    mostrarSenhaSirius()
  })

function mostrarSenhaSirius() {
  vSenhaNormalSirius.innerHTML =
    "N" +
    parseInt(senhaNormalSirius).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialSirius.innerHTML =
    "P" +
    parseInt(senhaPreferencialSirius).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// CHAMA TRINA
const vSenhaNormalChama = document.querySelector("#senha-normal-chama")
const vSenhaPreferencialChama = document.querySelector(
  "#senha-preferencial-chama"
)

let senhaNormalChama = localStorage.getItem("senhaNormalChama")
let senhaPreferencialChama = localStorage.getItem("senhaPreferencialChama")

if (!senhaNormalChama) senhaNormalChama = 0
if (!senhaPreferencialChama) senhaPreferencialChama = 0
mostrarSenhaChama()

// Soma Chama
document.getElementById("sum-normal-chama").addEventListener("click", () => {
  let normalValueChama = document.getElementById("normal-calc-chama").value

  normalValueChama.length !== 0
    ? (normalValueChama = parseInt(normalValueChama))
    : (normalValueChama = 0)
  senhaNormalChama = senhaNormalChama + normalValueChama
  document.getElementById("normal-calc-chama").value = ""
  mostrarSenhaChama()
})
document
  .getElementById("sum-preferencial-chama")
  .addEventListener("click", () => {
    let preferencialValueChama = document.getElementById(
      "preferencial-calc-chama"
    ).value

    preferencialValueChama.length !== 0
      ? (preferencialValueChama = parseInt(preferencialValueChama))
      : (preferencialValueChama = 0)
    senhaPreferencialChama = senhaPreferencialChama + preferencialValueChama
    document.getElementById("preferencial-calc-chama").value = ""
    mostrarSenhaChama()
  })

// Subtrai Chama
document.getElementById("sub-normal-chama").addEventListener("click", () => {
  let normalValueChama = document.getElementById("normal-calc-chama").value

  normalValueChama.length !== 0
    ? (normalValueChama = parseInt(normalValueChama))
    : (normalValueChama = 0)
  senhaNormalChama = senhaNormalChama - normalValueChama
  document.getElementById("normal-calc-chama").value = ""
  mostrarSenhaChama()
})
document
  .getElementById("sub-preferencial-chama")
  .addEventListener("click", () => {
    let preferencialValueChama = document.getElementById(
      "preferencial-calc-chama"
    ).value

    preferencialValueChama.length !== 0
      ? (preferencialValueChama = parseInt(preferencialValueChama))
      : (preferencialValueChama = 0)
    senhaPreferencialChama = senhaPreferencialChama - preferencialValueChama
    document.getElementById("preferencial-calc-chama").value = ""
    mostrarSenhaChama()
  })

// ZERA Chama
document.getElementById("zerar-normal-chama").addEventListener("click", () => {
  senhaNormalChama = 0
  mostrarSenhaChama()
})
document
  .getElementById("zerar-preferencial-chama")
  .addEventListener("click", () => {
    senhaPreferencialChama = 0
    mostrarSenhaChama()
  })

function mostrarSenhaChama() {
  vSenhaNormalChama.innerHTML =
    "N" +
    parseInt(senhaNormalChama).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialChama.innerHTML =
    "P" +
    parseInt(senhaPreferencialChama).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// DESOBSESSÃO
const vSenhaNormalDesobsessao = document.querySelector(
  "#senha-normal-desobsessao"
)
const vSenhaPreferencialDesobsessao = document.querySelector(
  "#senha-preferencial-desobsessao"
)

let senhaNormalDesobsessao = localStorage.getItem("senhaNormalDesobsessao")
let senhaPreferencialDesobsessao = localStorage.getItem(
  "senhaPreferencialDesobsessao"
)

if (!senhaNormalDesobsessao) senhaNormalDesobsessao = 0
if (!senhaPreferencialDesobsessao) senhaPreferencialDesobsessao = 0
mostrarSenhaDesobsessao()

// Soma Desobsessao
document
  .getElementById("sum-normal-desobsessao")
  .addEventListener("click", () => {
    let normalValueDesobsessao = document.getElementById(
      "normal-calc-desobsessao"
    ).value

    normalValueDesobsessao.length !== 0
      ? (normalValueDesobsessao = parseInt(normalValueDesobsessao))
      : (normalValueDesobsessao = 0)
    senhaNormalDesobsessao = senhaNormalDesobsessao + normalValueDesobsessao
    document.getElementById("normal-calc-desobsessao").value = ""
    mostrarSenhaDesobsessao()
  })
document
  .getElementById("sum-preferencial-desobsessao")
  .addEventListener("click", () => {
    let preferencialValueDesobsessao = document.getElementById(
      "preferencial-calc-desobsessao"
    ).value

    preferencialValueDesobsessao.length !== 0
      ? (preferencialValueDesobsessao = parseInt(preferencialValueDesobsessao))
      : (preferencialValueDesobsessao = 0)
    senhaPreferencialDesobsessao =
      senhaPreferencialDesobsessao + preferencialValueDesobsessao
    document.getElementById("preferencial-calc-desobsessao").value = ""
    mostrarSenhaDesobsessao()
  })

// Subtrai Desobsessao
document
  .getElementById("sub-normal-desobsessao")
  .addEventListener("click", () => {
    let normalValueDesobsessao = document.getElementById(
      "normal-calc-desobsessao"
    ).value

    normalValueDesobsessao.length !== 0
      ? (normalValueDesobsessao = parseInt(normalValueDesobsessao))
      : (normalValueDesobsessao = 0)
    senhaNormalDesobsessao = senhaNormalDesobsessao - normalValueDesobsessao
    document.getElementById("normal-calc-desobsessao").value = ""
    mostrarSenhaDesobsessao()
  })
document
  .getElementById("sub-preferencial-desobsessao")
  .addEventListener("click", () => {
    let preferencialValueDesobsessao = document.getElementById(
      "preferencial-calc-desobsessao"
    ).value

    preferencialValueDesobsessao.length !== 0
      ? (preferencialValueDesobsessao = parseInt(preferencialValueDesobsessao))
      : (preferencialValueDesobsessao = 0)
    senhaPreferencialDesobsessao =
      senhaPreferencialDesobsessao - preferencialValueDesobsessao
    document.getElementById("preferencial-calc-desobsessao").value = ""
    mostrarSenhaDesobsessao()
  })

// ZERA Desobsessao
document
  .getElementById("zerar-normal-desobsessao")
  .addEventListener("click", () => {
    senhaNormalDesobsessao = 0
    mostrarSenhaDesobsessao()
  })
document
  .getElementById("zerar-preferencial-desobsessao")
  .addEventListener("click", () => {
    senhaPreferencialDesobsessao = 0
    mostrarSenhaDesobsessao()
  })

function mostrarSenhaDesobsessao() {
  vSenhaNormalDesobsessao.innerHTML =
    "N" +
    parseInt(senhaNormalDesobsessao).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialDesobsessao.innerHTML =
    "P" +
    parseInt(senhaPreferencialDesobsessao).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// PSICOGRAFIA
const vSenhaNormalPsicografia = document.querySelector(
  "#senha-normal-psicografia"
)
const vSenhaPreferencialPsicografia = document.querySelector(
  "#senha-preferencial-psicografia"
)

let senhaNormalPsicografia = localStorage.getItem("senhaNormalPsicografia")
let senhaPreferencialPsicografia = localStorage.getItem(
  "senhaPreferencialPsicografia"
)

if (!senhaNormalPsicografia) senhaNormalPsicografia = 0
if (!senhaPreferencialPsicografia) senhaPreferencialPsicografia = 0
mostrarSenhaPsicografia()

// Soma Psicografia
document
  .getElementById("sum-normal-psicografia")
  .addEventListener("click", () => {
    let normalValuePsicografia = document.getElementById(
      "normal-calc-psicografia"
    ).value

    normalValuePsicografia.length !== 0
      ? (normalValuePsicografia = parseInt(normalValuePsicografia))
      : (normalValuePsicografia = 0)
    senhaNormalPsicografia = senhaNormalPsicografia + normalValuePsicografia
    document.getElementById("normal-calc-psicografia").value = ""
    mostrarSenhaPsicografia()
  })
document
  .getElementById("sum-preferencial-psicografia")
  .addEventListener("click", () => {
    let preferencialValuePsicografia = document.getElementById(
      "preferencial-calc-psicografia"
    ).value

    preferencialValuePsicografia.length !== 0
      ? (preferencialValuePsicografia = parseInt(preferencialValuePsicografia))
      : (preferencialValuePsicografia = 0)
    senhaPreferencialPsicografia =
      senhaPreferencialPsicografia + preferencialValuePsicografia
    document.getElementById("preferencial-calc-psicografia").value = ""
    mostrarSenhaPsicografia()
  })

// Subtrai Psicografia
document
  .getElementById("sub-normal-psicografia")
  .addEventListener("click", () => {
    let normalValuePsicografia = document.getElementById(
      "normal-calc-psicografia"
    ).value

    normalValuePsicografia.length !== 0
      ? (normalValuePsicografia = parseInt(normalValuePsicografia))
      : (normalValuePsicografia = 0)
    senhaNormalPsicografia = senhaNormalPsicografia - normalValuePsicografia
    document.getElementById("normal-calc-psicografia").value = ""
    mostrarSenhaPsicografia()
  })
document
  .getElementById("sub-preferencial-psicografia")
  .addEventListener("click", () => {
    let preferencialValuePsicografia = document.getElementById(
      "preferencial-calc-psicografia"
    ).value

    preferencialValuePsicografia.length !== 0
      ? (preferencialValuePsicografia = parseInt(preferencialValuePsicografia))
      : (preferencialValuePsicografia = 0)
    senhaPreferencialPsicografia =
      senhaPreferencialPsicografia - preferencialValuePsicografia
    document.getElementById("preferencial-calc-psicografia").value = ""
    mostrarSenhaPsicografia()
  })

// ZERA Psicografia
document
  .getElementById("zerar-normal-psicografia")
  .addEventListener("click", () => {
    senhaNormalPsicografia = 0
    mostrarSenhaPsicografia()
  })
document
  .getElementById("zerar-preferencial-psicografia")
  .addEventListener("click", () => {
    senhaPreferencialPsicografia = 0
    mostrarSenhaPsicografia()
  })

function mostrarSenhaPsicografia() {
  vSenhaNormalPsicografia.innerHTML =
    "N" +
    parseInt(senhaNormalPsicografia).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialPsicografia.innerHTML =
    "P" +
    parseInt(senhaPreferencialPsicografia).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// PASSE VIVENCIA
const vSenhaNormalPasseVivencia = document.querySelector(
  "#senha-normal-passe-vivencia"
)
const vSenhaPreferencialPasseVivencia = document.querySelector(
  "#senha-preferencial-passe-vivencia"
)

let senhaNormalPasseVivencia = localStorage.getItem("senhaNormalPasseVivencia")
let senhaPreferencialPasseVivencia = localStorage.getItem(
  "senhaPreferencialPasseVivencia"
)

if (!senhaNormalPasseVivencia) senhaNormalPasseVivencia = 0
if (!senhaPreferencialPasseVivencia) senhaPreferencialPasseVivencia = 0
mostrarSenhaPasseVivencia()

// Soma PasseVivencia
document
  .getElementById("sum-normal-passe-vivencia")
  .addEventListener("click", () => {
    let normalValuePasseVivencia = document.getElementById(
      "normal-calc-passe-vivencia"
    ).value

    normalValuePasseVivencia.length !== 0
      ? (normalValuePasseVivencia = parseInt(normalValuePasseVivencia))
      : (normalValuePasseVivencia = 0)
    senhaNormalPasseVivencia =
      senhaNormalPasseVivencia + normalValuePasseVivencia
    document.getElementById("normal-calc-passe-vivencia").value = ""
    mostrarSenhaPasseVivencia()
  })
document
  .getElementById("sum-preferencial-passe-vivencia")
  .addEventListener("click", () => {
    let preferencialValuePasseVivencia = document.getElementById(
      "preferencial-calc-passe-vivencia"
    ).value

    preferencialValuePasseVivencia.length !== 0
      ? (preferencialValuePasseVivencia = parseInt(
          preferencialValuePasseVivencia
        ))
      : (preferencialValuePasseVivencia = 0)
    senhaPreferencialPasseVivencia =
      senhaPreferencialPasseVivencia + preferencialValuePasseVivencia
    document.getElementById("preferencial-calc-passe-vivencia").value = ""
    mostrarSenhaPasseVivencia()
  })

// Subtrai PasseVivencia
document
  .getElementById("sub-normal-passe-vivencia")
  .addEventListener("click", () => {
    let normalValuePasseVivencia = document.getElementById(
      "normal-calc-passe-vivencia"
    ).value

    normalValuePasseVivencia.length !== 0
      ? (normalValuePasseVivencia = parseInt(normalValuePasseVivencia))
      : (normalValuePasseVivencia = 0)
    senhaNormalPasseVivencia =
      senhaNormalPasseVivencia - normalValuePasseVivencia
    document.getElementById("normal-calc-passe-vivencia").value = ""
    mostrarSenhaPasseVivencia()
  })
document
  .getElementById("sub-preferencial-passe-vivencia")
  .addEventListener("click", () => {
    let preferencialValuePasseVivencia = document.getElementById(
      "preferencial-calc-passe-vivencia"
    ).value

    preferencialValuePasseVivencia.length !== 0
      ? (preferencialValuePasseVivencia = parseInt(
          preferencialValuePasseVivencia
        ))
      : (preferencialValuePasseVivencia = 0)
    senhaPreferencialPasseVivencia =
      senhaPreferencialPasseVivencia - preferencialValuePasseVivencia
    document.getElementById("preferencial-calc-passe-vivencia").value = ""
    mostrarSenhaPasseVivencia()
  })

// ZERA PasseVivencia
document
  .getElementById("zerar-normal-passe-vivencia")
  .addEventListener("click", () => {
    senhaNormalPasseVivencia = 0
    mostrarSenhaPasseVivencia()
  })
document
  .getElementById("zerar-preferencial-passe-vivencia")
  .addEventListener("click", () => {
    senhaPreferencialPasseVivencia = 0
    mostrarSenhaPasseVivencia()
  })

function mostrarSenhaPasseVivencia() {
  vSenhaNormalPasseVivencia.innerHTML =
    "N" +
    parseInt(senhaNormalPasseVivencia).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialPasseVivencia.innerHTML =
    "P" +
    parseInt(senhaPreferencialPasseVivencia).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// TEMPLÁRIOS
const vSenhaNormalTemplarios = document.querySelector(
  "#senha-normal-templarios"
)
const vSenhaPreferencialTemplarios = document.querySelector(
  "#senha-preferencial-templarios"
)

let senhaNormalTemplarios = localStorage.getItem("senhaNormalTemplarios")
let senhaPreferencialTemplarios = localStorage.getItem(
  "senhaPreferencialTemplarios"
)

if (!senhaNormalTemplarios) senhaNormalTemplarios = 0
if (!senhaPreferencialTemplarios) senhaPreferencialTemplarios = 0
mostrarSenhaTemplarios()

// Soma Templarios
document
  .getElementById("sum-normal-templarios")
  .addEventListener("click", () => {
    let normalValueTemplarios = document.getElementById(
      "normal-calc-templarios"
    ).value

    normalValueTemplarios.length !== 0
      ? (normalValueTemplarios = parseInt(normalValueTemplarios))
      : (normalValueTemplarios = 0)
    senhaNormalTemplarios = senhaNormalTemplarios + normalValueTemplarios
    document.getElementById("normal-calc-templarios").value = ""
    mostrarSenhaTemplarios()
  })
document
  .getElementById("sum-preferencial-templarios")
  .addEventListener("click", () => {
    let preferencialValueTemplarios = document.getElementById(
      "preferencial-calc-templarios"
    ).value

    preferencialValueTemplarios.length !== 0
      ? (preferencialValueTemplarios = parseInt(preferencialValueTemplarios))
      : (preferencialValueTemplarios = 0)
    senhaPreferencialTemplarios =
      senhaPreferencialTemplarios + preferencialValueTemplarios
    document.getElementById("preferencial-calc-templarios").value = ""
    mostrarSenhaTemplarios()
  })

// Subtrai Templarios
document
  .getElementById("sub-normal-templarios")
  .addEventListener("click", () => {
    let normalValueTemplarios = document.getElementById(
      "normal-calc-templarios"
    ).value

    normalValueTemplarios.length !== 0
      ? (normalValueTemplarios = parseInt(normalValueTemplarios))
      : (normalValueTemplarios = 0)
    senhaNormalTemplarios = senhaNormalTemplarios - normalValueTemplarios
    document.getElementById("normal-calc-templarios").value = ""
    mostrarSenhaTemplarios()
  })
document
  .getElementById("sub-preferencial-templarios")
  .addEventListener("click", () => {
    let preferencialValueTemplarios = document.getElementById(
      "preferencial-calc-templarios"
    ).value

    preferencialValueTemplarios.length !== 0
      ? (preferencialValueTemplarios = parseInt(preferencialValueTemplarios))
      : (preferencialValueTemplarios = 0)
    senhaPreferencialTemplarios =
      senhaPreferencialTemplarios - preferencialValueTemplarios
    document.getElementById("preferencial-calc-templarios").value = ""
    mostrarSenhaTemplarios()
  })

// ZERA Templarios
document
  .getElementById("zerar-normal-templarios")
  .addEventListener("click", () => {
    senhaNormalTemplarios = 0
    mostrarSenhaTemplarios()
  })
document
  .getElementById("zerar-preferencial-templarios")
  .addEventListener("click", () => {
    senhaPreferencialTemplarios = 0
    mostrarSenhaTemplarios()
  })

function mostrarSenhaTemplarios() {
  vSenhaNormalTemplarios.innerHTML =
    "N" +
    parseInt(senhaNormalTemplarios).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialTemplarios.innerHTML =
    "P" +
    parseInt(senhaPreferencialTemplarios).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// ATENDIMENTO
const vSenhaNormalAtendimento = document.querySelector(
  "#senha-normal-atendimento"
)
const vSenhaPreferencialAtendimento = document.querySelector(
  "#senha-preferencial-atendimento"
)

let senhaNormalAtendimento = localStorage.getItem("senhaNormalAtendimento")
let senhaPreferencialAtendimento = localStorage.getItem(
  "senhaPreferencialAtendimento"
)

if (!senhaNormalAtendimento) senhaNormalAtendimento = 0
if (!senhaPreferencialAtendimento) senhaPreferencialAtendimento = 0
mostrarSenhaAtendimento()

// Soma Atendimento
document
  .getElementById("sum-normal-atendimento")
  .addEventListener("click", () => {
    let normalValueAtendimento = document.getElementById(
      "normal-calc-atendimento"
    ).value

    normalValueAtendimento.length !== 0
      ? (normalValueAtendimento = parseInt(normalValueAtendimento))
      : (normalValueAtendimento = 0)
    senhaNormalAtendimento = senhaNormalAtendimento + normalValueAtendimento
    document.getElementById("normal-calc-atendimento").value = ""
    mostrarSenhaAtendimento()
  })
document
  .getElementById("sum-preferencial-atendimento")
  .addEventListener("click", () => {
    let preferencialValueAtendimento = document.getElementById(
      "preferencial-calc-atendimento"
    ).value

    preferencialValueAtendimento.length !== 0
      ? (preferencialValueAtendimento = parseInt(preferencialValueAtendimento))
      : (preferencialValueAtendimento = 0)
    senhaPreferencialAtendimento =
      senhaPreferencialAtendimento + preferencialValueAtendimento
    document.getElementById("preferencial-calc-atendimento").value = ""
    mostrarSenhaAtendimento()
  })

// Subtrai Atendimento
document
  .getElementById("sub-normal-atendimento")
  .addEventListener("click", () => {
    let normalValueAtendimento = document.getElementById(
      "normal-calc-atendimento"
    ).value

    normalValueAtendimento.length !== 0
      ? (normalValueAtendimento = parseInt(normalValueAtendimento))
      : (normalValueAtendimento = 0)
    senhaNormalAtendimento = senhaNormalAtendimento - normalValueAtendimento
    document.getElementById("normal-calc-atendimento").value = ""
    mostrarSenhaAtendimento()
  })
document
  .getElementById("sub-preferencial-atendimento")
  .addEventListener("click", () => {
    let preferencialValueAtendimento = document.getElementById(
      "preferencial-calc-atendimento"
    ).value

    preferencialValueAtendimento.length !== 0
      ? (preferencialValueAtendimento = parseInt(preferencialValueAtendimento))
      : (preferencialValueAtendimento = 0)
    senhaPreferencialAtendimento =
      senhaPreferencialAtendimento - preferencialValueAtendimento
    document.getElementById("preferencial-calc-atendimento").value = ""
    mostrarSenhaAtendimento()
  })

// ZERA Atendimento
document
  .getElementById("zerar-normal-atendimento")
  .addEventListener("click", () => {
    senhaNormalAtendimento = 0
    mostrarSenhaAtendimento()
  })
document
  .getElementById("zerar-preferencial-atendimento")
  .addEventListener("click", () => {
    senhaPreferencialAtendimento = 0
    mostrarSenhaAtendimento()
  })

function mostrarSenhaAtendimento() {
  vSenhaNormalAtendimento.innerHTML =
    "N" +
    parseInt(senhaNormalAtendimento).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })

  vSenhaPreferencialAtendimento.innerHTML =
    "P" +
    parseInt(senhaPreferencialAtendimento).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}

// PASSE 1 2 3
const vSenhaNormalPasse1 = document.querySelector("#senha-normal-passe1")
const vSenhaNormalPasse2 = document.querySelector("#senha-normal-passe2")
const vSenhaNormalPasse3 = document.querySelector("#senha-normal-passe3")

let senhaNormalPasse1 = localStorage.getItem("senhaNormalPasse1")
let senhaNormalPasse2 = localStorage.getItem("senhaNormalPasse2")
let senhaNormalPasse3 = localStorage.getItem("senhaNormalPasse3")

if (!senhaNormalPasse1) senhaNormalPasse1 = 0
if (!senhaNormalPasse2) senhaNormalPasse2 = 0
if (!senhaNormalPasse3) senhaNormalPasse3 = 0

mostrarSenhaPasse()

// Soma Passe
document.getElementById("sum-normal-passe1").addEventListener("click", () => {
  let normalValuePasse1 = document.getElementById("normal-calc-passe1").value

  normalValuePasse1.length !== 0
    ? (normalValuePasse1 = parseInt(normalValuePasse1))
    : (normalValuePasse1 = 0)
  senhaNormalPasse1 = senhaNormalPasse1 + normalValuePasse1
  document.getElementById("normal-calc-passe1").value = ""
  mostrarSenhaPasse()
})
document.getElementById("sum-normal-passe2").addEventListener("click", () => {
  let normalValuePasse2 = document.getElementById("normal-calc-passe2").value

  normalValuePasse2.length !== 0
    ? (normalValuePasse2 = parseInt(normalValuePasse2))
    : (normalValuePasse2 = 0)
  senhaNormalPasse2 = senhaNormalPasse2 + normalValuePasse2
  document.getElementById("normal-calc-passe2").value = ""
  mostrarSenhaPasse()
})
document.getElementById("sum-normal-passe3").addEventListener("click", () => {
  let normalValuePasse3 = document.getElementById("normal-calc-passe3").value

  normalValuePasse3.length !== 0
    ? (normalValuePasse3 = parseInt(normalValuePasse3))
    : (normalValuePasse3 = 0)
  senhaNormalPasse3 = senhaNormalPasse3 + normalValuePasse3
  document.getElementById("normal-calc-passe3").value = ""
  mostrarSenhaPasse()
})

// Subtrai Passe
document.getElementById("sub-normal-passe1").addEventListener("click", () => {
  let normalValuePasse1 = document.getElementById("normal-calc-passe1").value

  normalValuePasse1.length !== 0
    ? (normalValuePasse1 = parseInt(normalValuePasse1))
    : (normalValuePasse1 = 0)
  senhaNormalPasse1 = senhaNormalPasse1 - normalValuePasse1
  document.getElementById("normal-calc-passe1").value = ""
  mostrarSenhaPasse()
})
document.getElementById("sub-normal-passe2").addEventListener("click", () => {
  let normalValuePasse2 = document.getElementById("normal-calc-passe2").value

  normalValuePasse2.length !== 0
    ? (normalValuePasse2 = parseInt(normalValuePasse2))
    : (normalValuePasse2 = 0)
  senhaNormalPasse2 = senhaNormalPasse2 - normalValuePasse2
  document.getElementById("normal-calc-passe2").value = ""
  mostrarSenhaPasse()
})
document.getElementById("sub-normal-passe3").addEventListener("click", () => {
  let normalValuePasse3 = document.getElementById("normal-calc-passe3").value

  normalValuePasse3.length !== 0
    ? (normalValuePasse3 = parseInt(normalValuePasse3))
    : (normalValuePasse3 = 0)
  senhaNormalPasse3 = senhaNormalPasse3 - normalValuePasse3
  document.getElementById("normal-calc-passe3").value = ""
  mostrarSenhaPasse()
})

// ZERA Passe
document.getElementById("zerar-normal-passe1").addEventListener("click", () => {
  senhaNormalPasse1 = 0
  mostrarSenhaPasse()
})
document.getElementById("zerar-normal-passe2").addEventListener("click", () => {
  senhaNormalPasse2 = 0
  mostrarSenhaPasse()
})
document.getElementById("zerar-normal-passe3").addEventListener("click", () => {
  senhaNormalPasse3 = 0
  mostrarSenhaPasse()
})

function mostrarSenhaPasse() {
  vSenhaNormalPasse1.innerHTML =
    "N" +
    parseInt(senhaNormalPasse1).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
  vSenhaNormalPasse2.innerHTML =
    "N" +
    parseInt(senhaNormalPasse2).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
  vSenhaNormalPasse3.innerHTML =
    "N" +
    parseInt(senhaNormalPasse3).toLocaleString("pt-br", {
      minimumIntegerDigits: 3,
    })
}
