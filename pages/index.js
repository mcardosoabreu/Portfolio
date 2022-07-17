import { useState } from "react"

function Home() {
    return (
        <div>
            <h1>Miguel</h1>
            <h2>IVVB11</h2>
            <h3>Cotação: 228,85</h3>
            <h3>Quantidade: 743</h3>
            <h4>Total: R$ 170.035,55</h4>
            <br></br>
            <h2>HASH11</h2>
            <h3>Cotação: 19,50</h3>
            <h3>Quantidade: 26.157</h3>
            <h4>Total: R$ 510.061,50</h4>
            <br></br>
            <h2>BOVA11</h2>
            <h3>Cotação: 93,27</h3>
            <h3>Quantidade: 5.467</h3>
            <h4>Total: R$ 509.907,09</h4>
            <br></br>
            <h2>XINA11</h2>
            <h3>Cotação: 6,80</h3>
            <h3>Quantidade: 25.000</h3>
            <h4>Total: R$ 170.000,00</h4>
            <br></br>
            <h2>GOLD11</h2>
            <h3>Cotação: 9,80</h3>
            <h3>Quantidade: 34.693</h3>
            <h4>Total: R$ 339.991,40</h4>
            <br></br>
            <h2>Caixa</h2>
            <h3>4,46</h3>
            <br></br>
            <h1>Nanda</h1>
            <h2>ITSA4 </h2>
            <h3>Cotação: 8,35</h3>
            <h3>Quantidade: 23.952</h3>
            <h4>Total: R$ 199.999,20</h4>
            <br></br>
            <h2>PETR4</h2>
            <h3>Cotação: 27,96</h3>
            <h3>Quantidade: 7.153</h3>
            <h4>Total: R$ 199.997,88</h4>
            <br></br>
            <h2>CPFE3</h2>
            <h3>Cotação: 31,60</h3>
            <h3>Quantidade: 6.329</h3>
            <h4>Total: R$ 199.996,40</h4>
            <br></br>
            <h2>ALUP11</h2>
            <h3>Cotação: 26,75</h3>
            <h3>Quantidade: 7.476</h3>
            <h4>Total: R$ 199.983,00</h4>
            <br></br>
            <h2>VALE3</h2>
            <h3>Cotação: 68,37</h3>
            <h3>Quantidade: 2.925</h3>
            <h4>Total: R$ 199.982,25</h4>
            <br></br>
            <h2>GOGL34</h2>
            <h3>Cotação: 79,95</h3>
            <h3>Quantidade: 2.501</h3>
            <h4>Total: R$ 199.954,95</h4>
            <br></br>
            <h2>MELI34</h2>
            <h3>Cotação: 31,22</h3>
            <h3>Quantidade: 3.203</h3>
            <h4>Total: R$ 99.997,66</h4>
            <br></br>
            <h2>PFIZ34</h2>
            <h3>Cotação: 69,50</h3>
            <h3>Quantidade: 1.438</h3>
            <h4>Total: R$ 99.941,00</h4>
            <br></br>
            <h2>MSFT34</h2>
            <h3>Cotação: 57,40</h3>
            <h3>Quantidade: 1.742</h3>
            <h4>Total: R$ 99.990,80</h4>
            <br></br>
            <h2>GOLD11</h2>
            <h3>Cotação: 9,80</h3>
            <h3>Quantidade: 20.408</h3>
            <h4>Total: R$ 199.998,40</h4>
            <br></br>
            <h2>Caixa</h2>
            <h3>158,46</h3>
            <br></br>
            <Counter />
            <div>Test</div>
        </div>
    )
}

function Counter() {
    const [counter,setCounter] = useState(1)

    function addCounter() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={addCounter}>Add</button>
        </div>
    )
}

export default Home