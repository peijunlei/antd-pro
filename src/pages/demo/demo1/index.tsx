

import './index.less'
function Demo1() {
  return <div className="demo1">
    <ul className="list">
      <li className="item" style={{ '--i': 6 }}><a className='text'>home</a></li>
      <li className="item" style={{ '--i': 5 }}><a className='text'>about</a></li>
      <li className="item" style={{ '--i': 4 }}><a className='text'>user</a></li>
      <li className="item" style={{ '--i': 3 }}><a className='text'>posts</a></li>
      <li className="item" style={{ '--i': 2 }}><a className='text'>article</a></li>
      <li className="item" style={{ '--i': 1 }}><a className='text'>test</a></li>
    </ul>
  </div>
}

export default Demo1;