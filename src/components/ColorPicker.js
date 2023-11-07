import React, { useState } from 'react';

function ColorPicker() {
  const colors = [
    'red', 'green', 'blue', 'yellow', 'pink', 'aqua', 'darkgoldenrod', 'darkmagenta', 'beige',
    'seagreen', 'orange', 'teal', 'sienna', 'black'
  ];

  const [tableBackgroundColor, setTableBackgroundColor] = useState('');
  const [showColorList, setShowColorList] = useState(false);

  const handleColorClick = (color) => {
    setTableBackgroundColor(color);
    setShowColorList(false);
  };

  const colorItems = colors.map((color, index) => (
    <span
      key={index}
      className="color-item"
      style={{ backgroundColor: color }}
      onClick={() => handleColorClick(color)}
    ></span>
  ));

  const toggleColorList = () => {
    setShowColorList(!showColorList);
    setTableBackgroundColor('white');
  };

  return (
    <div>
      <center>
        <table className='outer'>
          <thead>
            <tr>
              <th>Color Picker</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <center>
                  <table className='inner' style={{ backgroundColor: tableBackgroundColor }}>
                    <tbody>
                      <tr>
                        <td>
                          <button onClick={toggleColorList} className='button button-info'>Select a Color</button>
                          {showColorList && (
                            colorItems
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default ColorPicker;

