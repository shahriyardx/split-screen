"use client"

import { useState } from "react"
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable"
import ColorPicker from "./ui/color-picker"

type Direction = "horizontal" | "vertical"

const SplitSection = ({
	sd,
	defaultColor,
}: { sd?: (val: Direction | null) => void; defaultColor?: string }) => {
	const [direction, setDirection] = useState<Direction | null>(null)
	const [color, setColor] = useState<string>(defaultColor ?? "#fff")

	return (
		<ContextMenu>
			<ContextMenuTrigger asChild>
				{direction ? (
					<ResizablePanelGroup direction={direction}>
						<ResizablePanel>
							<SplitSection defaultColor={color} sd={setDirection} />
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel>
							<SplitSection defaultColor={color} sd={setDirection} />
						</ResizablePanel>
					</ResizablePanelGroup>
				) : (
					<div className="w-full h-full grid place-items-center relative p-1 ">
						<div
							className="w-full h-full rounded-md"
							style={{ background: color }}
						></div>
						
						<div className="absolute top-5 right-5">
							<ColorPicker  color={color} onChange={setColor}  />
							{/* <HexColorPicker color={color} onChange={setColor} /> */}
						</div>
					</div>
				)}
			</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem onSelect={() => setDirection("horizontal")}>
					Split Horizontal
				</ContextMenuItem>
				<ContextMenuItem onSelect={() => setDirection("vertical")}>
					Split Vertical
				</ContextMenuItem>
                {sd && (
                    <ContextMenuItem onSelect={() => sd(null)}>Remove</ContextMenuItem>
                )}
			</ContextMenuContent>
		</ContextMenu>
	)
}

export default SplitSection
