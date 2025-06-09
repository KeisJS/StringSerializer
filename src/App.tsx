import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { benchmarks } from './benchmarks/benchmarks.ts'

function App() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
            <tr className="align-middle">
              <th>Тип теста</th>
              <th>Исходная строка</th>
              <th>Сжатая строка</th>
              <th>
                Коэффециет сжатия, %<br />
                <span className="fw-lighter fst-italic">(Длина сжатой стр / Длина исходной стр) * 100</span>
              </th>
            </tr>
            </thead>
            <tbody>
            { benchmarks.map(({
                                description,
                                source,
                                serialized,
                                serializeData
                              }, index) => (
              <tr key={index}>
                <td>{ description }</td>
                <td className="text-break">{ source }</td>
                <td className="text-break">{ serialized }</td>
                <td>{ serializeData }</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
