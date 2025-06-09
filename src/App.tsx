import './App.css'
import { benchmarks } from './benchmarks/benchmarks.ts';

function App() {
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Тип теста</th>
            <th>Исходная строка</th>
            <th>Сжатая строка</th>
            <th>Коэффециет сжатия</th>
          </tr>
        </thead>
        <tbody>
        { benchmarks.map(({
            description,
            source,
            serialized,
            serializeData
          }) => (
          <tr>
            <td>{ description }</td>
            <td>{ source }</td>
            <td>{ serialized }</td>
            <td>{ serializeData }</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default App
