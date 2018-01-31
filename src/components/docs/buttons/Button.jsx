import React from 'react';

function Button(){
  const styles = {
  }
  return(
    <div>
      <button>Button</button>
      <style jsx>{`

        button {
          background-color: #3C3B3B;
          padding: 8px 17px 8px 17px;
          color: white;
          text-transform: uppercase;
          border: 2px solid #3C3B3B;
        }

        button:hover {
          background-color: white;
          border: 2px solid #3C3B3B;
          color: #3C3B3B;
        }

        button:active {
          animation: clickToShrink 0.2s ease 0s 1;
        }

        @keyframes clickToShrink {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export {Button};
