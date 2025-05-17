// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import { SongDocument } from "./SongDocument";
import { Prompt } from "./Prompt";
import { HTML } from "imperative-html/dist/esm/elements-strict";

	const {button, div, h2, p, } = HTML;//select, option} = HTML;

export class PresetPrompt implements Prompt {
		private readonly _cancelButton: HTMLButtonElement = button({class: "cancelButton"});
		private readonly _okayButton: HTMLButtonElement = button({class: "okayButton", style: "width:157.5px;" }, "Okay");
		private readonly _setDefault: HTMLButtonElement = button({class: "setDefault", style: "width:192.5px;" }, "Set preset as default");
		private readonly _cancelOption: HTMLButtonElement = button({class:"cancelOption", style: "width:157.5px" }, "Cancel")
		public readonly container: HTMLDivElement = div({class: "prompt", style: "width: 650px;"},	
		// private readonly _modeImportSelect: HTMLSelectElement = select({style: "width:100%;"},
		// 	option({value: "nes"}, "NES preset"),
		// );
		
			h2("New Song From Preset"),
			p({style: "text-align: left; margin: 0.5em 0;"},
			"Use a preset to help you start out your song!",
		),
			p({style: "text-align: left; margin: 0.5em 0;"},
			"With these presets, you can get started making the song you want even quicker!",
		),
		p({style: "text-align: left; margin: 0.5em 0;"},
			'You can also save a preset as your default by clicking the "Set preset as default" button',
		),

		// this._modeImportSelect,
		this._cancelButton,
		this._cancelOption,
		this._okayButton,
		this._setDefault,
	);

	constructor(private _doc: SongDocument) {
			this._cancelButton.addEventListener("click", this._close);
			this._cancelOption.addEventListener("click", this._close);
	}
	private _close = (): void => { 
	this._doc.undo();
	}
		
		public cleanUp = (): void => { 
		this._cancelButton.removeEventListener("click", this._close);
	}
}
