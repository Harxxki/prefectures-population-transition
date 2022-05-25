import React from 'react'
import '../App.css'
import { useMultipleChecked } from './useMultipleChecked'

const DATA = [{ name: '浜松太郎' }, { name: '浜松次郎' }, { name: '浜松三郎' }]

export default function CheckBox() {
  const { checked, toggleChecked, allCheck, clearCheck } = useMultipleChecked(DATA.map((row) => row.name))

  const csvDownload = () => {
    alert(checked.join(',') + 'のCSVダウンロードを実行')
  }
  return (
    <>
      <button className="btn-csv" onClick={csvDownload}>
        CSVダウンロード
      </button>
      <button className="btn-all" onClick={allCheck}>
        全てを選択
      </button>
      <button className="btn-rel" onClick={clearCheck}>
        全ての選択を解除
      </button>
      <table className="search-result-table">
        <thead>
          <tr>
            <th>操作対象</th>
            <th>名前</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((row) => (
            <tr key={row.name}>
              <td>
                <input
                  type="checkbox"
                  value={row.name}
                  onChange={() => toggleChecked(row.name)}
                  checked={checked.includes(row.name)}
                />
              </td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
