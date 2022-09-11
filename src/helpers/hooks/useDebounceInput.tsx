import React, { useCallback, useEffect, useRef, useState } from 'react';

const DEBOUNCE_MILL_SECOND = 500;

export type UseDebounceInputReturnType = [
  { originalInput: string | undefined; debounceInput: string | undefined },
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
];

export const useDebounceInput = (): UseDebounceInputReturnType => {
  const [originalInput, setOriginalInput] = useState<string | undefined>();
  const [debounceInput, setDebounceInput] = useState<string | undefined>();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setOriginalInput(e.target.value);
  const clearInput = () => setOriginalInput('');
  const handleDebounceInput = useCallback((inputValue) => setDebounceInput(inputValue), []);
  const input = {
    originalInput,
    debounceInput,
  };
  // ---------- timeout ----------
  const timeout: React.MutableRefObject<NodeJS.Timeout | undefined> =
    useRef<ReturnType<typeof setTimeout>>();
  const debounce = useCallback(() => {
    // セットされているタイマーがあればそれを破棄する
    if (typeof timeout.current !== 'undefined') {
      clearTimeout(timeout.current);
    }
    // 新しいタイマーをセットする
    timeout.current = setTimeout(() => {
      handleDebounceInput(originalInput);
    }, DEBOUNCE_MILL_SECOND);
  }, [handleDebounceInput, originalInput]);
  // unmountされたらタイマーを破棄する
  const clear = useCallback(() => {
    if (typeof timeout.current !== 'undefined') {
      clearTimeout(timeout.current);
    }
  }, []);

  useEffect(() => {
    debounce();

    return clear;
  }, [clear, debounce]);

  return [input, handleInput, clearInput];
};
