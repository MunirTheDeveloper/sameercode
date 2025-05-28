import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class responsiveIframePCFControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _iframe: HTMLIFrameElement;
    private _Source: string;
    private _container: HTMLDivElement;
    private _controlViewRendered: boolean;

    constructor() {}

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this._container = container;
        this._controlViewRendered = false;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        if (!this._controlViewRendered) {
            this.renderIFrame();
            this._controlViewRendered = true;
        }

        const iframeSrc = context.parameters.source.raw;

        if (this._Source !== iframeSrc) {
            this._Source = iframeSrc ?? "";
            this._iframe.src = this._Source;  // better to assign src directly
        }
    }

    private renderIFrame(): void {
        const wrapper = document.createElement("div");
        wrapper.className = "customControl"; // applies your CSS

        const iFrameElement: HTMLIFrameElement = document.createElement("iframe");
        iFrameElement.className = "iFrameControl"; // applies your CSS
        iFrameElement.frameBorder = "0";           // use property instead of attribute

        // Allow only camera access (no microphone)
        iFrameElement.setAttribute("allow", "camera");

        this._iframe = iFrameElement;

        wrapper.appendChild(this._iframe);
        this._container.appendChild(wrapper);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Cleanup logic if needed
    }
}
