import React, { useRef, useEffect, useState } from 'react';
import nAppPromise from '../config/nApp'

const Selections = () => {
  const [app, setApp] = useState(null);
  const selRef = useRef(null);

  useEffect(() => {
    (async () => {
      const _app = await nAppPromise();
      setApp(_app);
    })()
    
  }, [])

  useEffect(() => {
    if (app) {
      (async () => {
        (await app.selections()).mount(selRef.current)
      })()
    }
  }, [app])


  return (
    <div ref={selRef} />
  )
}

export default Selections;