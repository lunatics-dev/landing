import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import './Home.css';

const HomeComponent = styled('div')`
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled('h1')`
  color: white;
  font-family: 'Courier New', Courier, monospace;
`;

const Home = (): ReactElement => {
  const [textOut, setTextOut] = useState('');
  const [end, setEnd] = useState(false);
  const [data, setData] = useState(['Pronto lunatics volverá']);
  const [position, setPosition] = useState(0);

  const maquina = async (text: string) => {
    if (!text) return true;
    return await new Promise((resolve) => {
      const longitud = text.length;
      let i = 0;
      const timer = setInterval(() => {
        setTextOut((t) => t.substr(0, t.length - 1) + text.charAt(i) + '_');
        if (i >= longitud) {
          clearInterval(timer);
          setTextOut((t) => t.substr(0, longitud));
          setEnd(true);
          if (data.length - 1 > position) setPosition((p) => p + 1);
          else {
            setPosition(0);
          }
          resolve(true);
        } else i++;
      }, 115);
    });
  };
  useEffect(() => {
    maquina(data[position]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeComponent>
      <Text>
        {textOut}
        {end && <span className="blink">_</span>}
      </Text>
    </HomeComponent>
  );
};

export default Home;
