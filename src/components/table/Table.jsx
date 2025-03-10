import React, { useState } from 'react'

import './Table.css';

const Table = ({ bodyData, renderBody, headData, renderHead, limit }) => {
  const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData
  const [dataShow, setDataShow] = useState(initDataShow)

  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(bodyData.length / Number(limit))
    pages = bodyData.length % Number(limit) === 0 ? page : page + 1
    range = [...Array(pages).keys()]
  }

  const [currentPage, setCurrentPage] = useState(0);

  function selectPage(page) {
    const start = Number(limit) * page
    const end = start + Number(limit)
    setDataShow(bodyData.slice(start, end))
    setCurrentPage(page)
  }

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {headData && renderHead ? <thead><tr>{headData.map((item, index) => renderHead(item, index))}</tr></thead> : ''}
          {bodyData && renderBody ? <tbody>{dataShow.map((item, index) => renderBody(item, index))}</tbody> : ''}
        </table>
      </div>
      {
        pages > 1 ? (
          <div className="table__pagination">
            {
              range.map((item, index) => (
                <div key={index} className={`table__pagination-item ${currentPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                  {item + 1}
                </div>
              ))
            }
          </div>
        ) : ''
      }
    </div>
  )
}

export default Table;
