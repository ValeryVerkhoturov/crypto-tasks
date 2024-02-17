"use client"

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {Badge} from "@/components/ui/badge";

interface Props {
  name: string
  path: string
  disabled?: boolean
  badge?: string
}
export default function IndexNavigateButton(props: Props) {
  const router = useRouter()

  return (
    <li className="px-4 py-3">
      <button
        disabled={props.disabled}
        className="text-sm font-medium leading-none text-gray-900 dark:text-gray-50 rounded-lg hover:text-gray-900/90 dark:hover:text-gray-50/90"
        onClick={() => router.push(props.path)}
      >
        {props.name}
        {props.badge && (
          <Badge className="ml-2" variant={!props.disabled ? "default" : "secondary"}>{props.badge}</Badge>
        )}
      </button>
    </li>
  )
}

