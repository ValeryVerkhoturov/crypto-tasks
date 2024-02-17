"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React, {useEffect, useState} from "react";
import {VigenereCipher} from "@/lib/vigenere-cypher";

export function VigenereCipherLayout() {
  const [encodeText, setEncodeText] = useState("")
  const [encodeKey, setEncodeKey] = useState("")
  const [encodeResult, setEncodeResult] = useState("")

  const [decodeText, setDecodeText] = useState("")
  const [decodeKey, setDecodeKey] = useState("")
  const [decodeResult, setDecodeResult] = useState("")

  const cipher = new VigenereCipher();

  useEffect(() => {
    setEncodeResult(cipher.encrypt(encodeText, encodeKey));
  }, [encodeText, encodeKey]);

  useEffect(() => {
    setDecodeResult(cipher.decrypt(decodeText, decodeKey));
  }, [decodeText, decodeKey]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="px-4 mb-4 text-3xl font-bold text-gray-800 dark:text-gray-200">Vigenere Cipher Encode</h1>
      <div className="w-full max-w-md px-4 md:px-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="encodeText">Encode input</Label>
            <Input id="encodeText" placeholder="Encode input"
                   value={encodeText} onChange={e => setEncodeText(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="encodeKey">Encode key</Label>
            <Input id="encodeKey" placeholder="Encode key"
                   value={encodeKey} onChange={e => setEncodeKey(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="encodeKey">Encode output</Label>
            <Input id="encodeOutput" placeholder="Encode output"
                   disabled value={encodeResult}/>
          </div>
        </div>
      </div>
      <h1 className="px-4 my-4 text-3xl font-bold text-gray-800 dark:text-gray-200">Vigenere Cipher Decode</h1>
      <div className="w-full max-w-md px-4 md:px-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="decodeText">Decode input</Label>
            <Input id="decodeText" placeholder="Decode input"
                   value={decodeText} onChange={e => setDecodeText(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="decodeKey">Decode key</Label>
            <Input id="decodeKey" placeholder="Decode key"
                   value={decodeKey} onChange={e => setDecodeKey(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="decodeOutput">Decode output</Label>
            <Input id="decodeOutput" placeholder="Decode output"
                   disabled value={decodeResult}/>
          </div>
        </div>
      </div>
    </div>
  )
}
