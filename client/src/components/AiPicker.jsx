import React from 'react'

import CustomButton from './CustomButton';

const AiPicker = ({ prompt, setPrompt, genaratingImg, handleSubmit }) => {

  return (
    <div className="filepicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {genaratingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            CustomStyle="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              CustomStyle="text-xs"
            />
            <CustomButton
              type="outline"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              CustomStyle="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AiPicker
