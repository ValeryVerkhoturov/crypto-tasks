"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React, {useEffect, useState} from "react";
import {generateSquareArrayWithRandomValues, generateSquareArrayWithValues} from "@/lib/generate-square-array";
import {MagicSquareCipher} from "@/lib/magic-square-cipher";
import {Button} from "@/components/ui/button";

export function MagicSquareCipherLayout() {
  const [encodeText, setEncodeText] = useState("")
  const maxEncodeMatrixDimensions = 6
  const [encodeMatrixDimensions, setEncodeMatrixDimensions] = useState(4)
  const [encodeMatrix, setEncodeMatrix] = useState(generateSquareArrayWithValues(encodeMatrixDimensions))
  const [encodeResult, setEncodeResult] = useState("")

  const [decodeText, setDecodeText] = useState("")
  const maxDecodeMatrixDimensions = 6
  const [decodeMatrixDimensions, setDecodeMatrixDimensions] = useState(4)
  const [decodeMatrix, setDecodeMatrix] = useState(generateSquareArrayWithValues(decodeMatrixDimensions))
  const [decodeResult, setDecodeResult] = useState("")

  useEffect(() => {
    if (encodeMatrixDimensions > maxEncodeMatrixDimensions) {
      setEncodeMatrixDimensions(maxEncodeMatrixDimensions)
    }
    if (encodeMatrixDimensions < 1) {
      setEncodeMatrixDimensions(1)
    }
    setEncodeMatrix(generateSquareArrayWithValues(encodeMatrixDimensions))
    setEncodeText(encodeText?.slice(0, encodeMatrixDimensions ** 2))
  }, [encodeMatrixDimensions.toString()]);

  const encodeProcess = (matrix: number[][]) => {
      const cipher = new MagicSquareCipher(matrix);
      setEncodeResult(cipher.encrypt(encodeText.slice(0, encodeMatrixDimensions ** 2)));
  }

  useEffect(() => {
      encodeProcess(encodeMatrix)
  }, [encodeText, encodeMatrix]);


  useEffect(() => {
    if (decodeMatrixDimensions > maxDecodeMatrixDimensions) {
      setDecodeMatrixDimensions(maxDecodeMatrixDimensions)
    }
    if (decodeMatrixDimensions < 1) {
      setDecodeMatrixDimensions(1)
    }
    setDecodeMatrix(generateSquareArrayWithValues(decodeMatrixDimensions))
    setDecodeText(decodeText?.slice(0, decodeMatrixDimensions ** 2))
  }, [decodeMatrixDimensions]);

  const decodeProcess = (matrix: number[][]) => {
      const cipher = new MagicSquareCipher(matrix);
      setDecodeResult(cipher.decrypt(decodeText.slice(0, decodeMatrixDimensions ** 2)));
  }

  useEffect(() => {
      decodeProcess(decodeMatrix)
  }, [decodeText, decodeMatrix]);


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-4">
      {/* I have to do it to include required grid-cols in minified tailwind css bundle*/}
      <div className="hidden grid-cols-1"></div>
      <div className="hidden grid-cols-2"></div>
      <div className="hidden grid-cols-3"></div>
      <div className="hidden grid-cols-4"></div>
      <div className="hidden grid-cols-5"></div>
      <div className="hidden grid-cols-6"></div>
      <div className="hidden grid-cols-7"></div>
      <div className="hidden grid-cols-8"></div>
      <div className="hidden grid-cols-9"></div>
      <h1 className="px-4 mb-4 text-3xl font-bold text-gray-800 dark:text-gray-200">Magic Cube Cipher Encode</h1>
      <div className="w-full max-w-md px-4 md:px-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="space-y-1.5">
              <Label htmlFor="encodeText">Encode input</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Max: {encodeMatrixDimensions ** 2}.</p>
            </div>
            <Input id="encodeText" placeholder="Encode input"
                   value={encodeText} onChange={e => setEncodeText(e.target.value?.slice(0, encodeMatrixDimensions ** 2))}/>
          </div>
          <div className="space-y-2">
            <div className="space-y-1.5">
              <Label htmlFor="encodeMatrixDimensions">Encode matrix dimensions</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Max: {maxEncodeMatrixDimensions}.</p>
            </div>
            <Input id="encodeMatrixDimensions" placeholder="Encode matrix dimensions" type="number"
                   value={encodeMatrixDimensions} onChange={e => setEncodeMatrixDimensions(parseInt(e.target.value) || 1)}/>
          </div>
          <div className="space-y-2">
            <div className="space-y-1.5">
              <div className="flex flex-row justify-between">
                <div>
                  <Label htmlFor="encodeMatrix">Encode matrix</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Enter the values for the matrix.</p>
                </div>
                <Button onClick={() => setEncodeMatrix(generateSquareArrayWithRandomValues(encodeMatrixDimensions))}>Random</Button>
              </div>
            </div>
            <div className={`grid grid-cols-${encodeMatrixDimensions} w-full gap-1.5`}>
              {encodeMatrix.map((row, rowIndex) => (
                row.map((value, colIndex) => (
                  <Input
                    key={`${rowIndex}-${colIndex}`}
                    id={`${rowIndex}-${colIndex}`}
                    placeholder="0"
                    value={value}
                    onChange={e => {
                      const newMatrix = [...encodeMatrix];
                      const newValue = parseInt(e.target.value) || 0;
                      if (newValue >= encodeMatrixDimensions ** 2) {
                        return;
                      }
                      newMatrix[rowIndex][colIndex] = newValue;
                      setEncodeMatrix(newMatrix);
                      encodeProcess(newMatrix);
                    }}
                  />
                ))
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="encodeKey">Encode output</Label>
            <Input id="encodeOutput" placeholder="Encode output"
                   disabled value={encodeResult}/>
          </div>
        </div>
      </div>

      <h1 className="px-4 my-4 text-3xl font-bold text-gray-800 dark:text-gray-200">Magic Cube Cipher Decode</h1>
      <div className="w-full max-w-md px-4 md:px-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="space-y-1.5">
              <Label htmlFor="decodeText">Decode input</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Max: {decodeMatrixDimensions ** 2}.</p>
            </div>
            <Input id="decodeText" placeholder="Decode input"
                   value={decodeText} onChange={e => setDecodeText(e.target.value?.slice(0, decodeMatrixDimensions ** 2))}/>
          </div>
          <div className="space-y-2">
            <div className="space-y-1.5">
              <Label htmlFor="decodeMatrixDimensions">Decode matrix dimensions</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Max: {maxDecodeMatrixDimensions}.</p>
            </div>
            <Input id="decodeMatrixDimensions" placeholder="Decode matrix dimensions" type="number"
                   value={decodeMatrixDimensions} onChange={e => setDecodeMatrixDimensions(parseInt(e.target.value) || 1)}/>
          </div>
          <div className="space-y-2">
            <div className="space-y-1.5">
              <div className="flex flex-row justify-between">
                <div>
                  <Label htmlFor="decodeMatrix">Decode matrix</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Enter the values for the matrix.</p>
                </div>
                <Button onClick={() => setDecodeMatrix(generateSquareArrayWithRandomValues(decodeMatrixDimensions))}>Random</Button>
              </div>
            </div>
            <div className={`grid grid-cols-${decodeMatrixDimensions} w-full gap-1.5`}>
              {decodeMatrix.map((row, rowIndex) => (
                row.map((value, colIndex) => (
                  <Input
                    key={`${rowIndex}-${colIndex}`}
                    id={`${rowIndex}-${colIndex}`}
                    placeholder="0"
                    value={value}
                    onChange={e => {
                      const newMatrix = [...decodeMatrix];
                      const newValue = parseInt(e.target.value) || 0;
                      if (newValue >= decodeMatrixDimensions ** 2) {
                          return;
                      }
                      newMatrix[rowIndex][colIndex] = newValue;
                      setDecodeMatrix(newMatrix);
                      decodeProcess(newMatrix);
                    }}
                  />
                ))
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="decodeKey">Decode output</Label>
            <Input id="decodeOutput" placeholder="Decode output"
                   disabled value={decodeResult}/>
          </div>
        </div>
      </div>
    </div>
  )
}
