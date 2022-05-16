import React from "react";

export function openModal(target: string) {
  const openModal = document.getElementById(target);
  if (openModal) {
    openModal.classList.remove("opacity-0");
    openModal.classList.remove("pointer-events-none");
  }

  const overlay = document.querySelector(".modal-overlay");
  // @ts-ignore
  overlay.addEventListener("click", () => {
    const closeModalList = document.querySelectorAll(".modal-close");
    for (var i = 0; i < closeModalList.length; i++) {
      closeModalList[0].classList.add("opacity-0");
      closeModalList[0].classList.add("pointer-events-none");
    }
  });
}

export function closeModal(target: string) {
  const closeModal = document.getElementById(target);
  if (closeModal) {
    closeModal.classList.add("opacity-0");
    closeModal.classList.add("pointer-events-none");
  }

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape && document.body.classList.contains("modal-active")) {
      if (closeModal) {
        closeModal.classList.add("opacity-0");
        closeModal.classList.add("pointer-events-none");
      }
    }
  };
}

function DefaultModal({
  target,
  children,
  title,
  maxWidth = "100%",
}: {
  target: string;
  children: React.ReactNode;
  title: string;
  maxWidth?: string;
}) {
  return (
    <>
      <div
        className={`${target} modal opacity-0 pointer-events-none fixed w-full flex h-full top-0 left-0 items-center justify-center z-50`}
        id={target}>
        <div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

        <div
          className='modal-container bg-white w-11/12 md:max-w-4xl mx-auto rounded shadow-lg z-50 overflow-y-auto '
          style={{
            width: maxWidth,
            maxHeight: "85vh",
          }}>
          <div className='modal-content py-4 text-left px-6 overflow-y-auto'>
            <div className='flex justify-between items-center pb-3'>
              <p className='text-base font-medium'>{title}</p>
              <div
                className='modal-close cursor-pointer z-50'
                onClick={() => closeModal(target)}>
                <svg
                  className='fill-current text-black'
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'>
                  <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
                </svg>
              </div>
            </div>

            {children}

            <div className='flex justify-end pt-2 items-center'>
              <div>
                <button
                  type='submit'
                  className='bg-transparent px-4 py-2 text-xs rounded-md text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2'>
                  Simpan
                </button>
              </div>
              <div>
                <button
                  onClick={() => closeModal(target)}
                  type='button'
                  className='modal-close px-4 py-2 text-xs bg-indigo-500 rounded-md text-white hover:bg-indigo-400'>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultModal;
