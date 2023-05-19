import { Gauge } from "../types/Gauge";
import { PointerType } from '../types/PointerType';
import * as needleHooks from "./pointers/needle";
import * as blobHooks from "./pointers/blob";

export const drawPointer = (gauge: Gauge, resize: boolean = false) => {
    if(gauge.selectedPointerType.current == PointerType.Needle) {
        needleHooks.drawNeedle(gauge, resize);
    } else if (gauge.selectedPointerType.current == PointerType.Blob) {
        blobHooks.addBlobElement(gauge);
    } else if (gauge.selectedPointerType.current == PointerType.Arrow) {
        //TODO
    }
}

export const addPointerElement = (gauge: Gauge) => {
    if(gauge.selectedPointerType.current == PointerType.Needle) {
        needleHooks.addNeedleElement(gauge);
    } else if (gauge.selectedPointerType.current == PointerType.Blob) {
        blobHooks.addBlobElement(gauge);
    } else if (gauge.selectedPointerType.current == PointerType.Arrow) {
        //TODO
    }
}
export const clearPointerElement = (gauge: Gauge) => gauge.pointer.current.selectAll("*").remove();
