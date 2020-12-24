export function isHTMLAnchorElement(node: Node): node is HTMLAnchorElement {
  return node.nodeName === 'A'
}

export function isHTMLAppletElement(node: Node): node is HTMLAppletElement {
  return node.nodeName === 'APPLET'
}

export function isHTMLAreaElement(node: Node): node is HTMLAreaElement {
  return node.nodeName === 'AREA'
}

export function isHTMLAudioElement(node: Node): node is HTMLAudioElement {
  return node.nodeName === 'AUDIO'
}

export function isHTMLBaseElement(node: Node): node is HTMLBaseElement {
  return node.nodeName === 'BASE'
}

export function isHTMLBaseFontElement(node: Node): node is HTMLBaseFontElement {
  return node.nodeName === 'BASEFONT'
}

export function isHTMLQuoteElement(node: Node): node is HTMLQuoteElement {
  return node.nodeName === 'BLOCKQUOTE'
      || node.nodeName === 'Q'
}

export function isHTMLBodyElement(node: Node): node is HTMLBodyElement {
  return node.nodeName === 'BODY'
}

export function isHTMLBRElement(node: Node): node is HTMLBRElement {
  return node.nodeName === 'BR'
}

export function isHTMLButtonElement(node: Node): node is HTMLButtonElement {
  return node.nodeName === 'BUTTON'
}

export function isHTMLCanvasElement(node: Node): node is HTMLCanvasElement {
  return node.nodeName === 'CANVAS'
}

export function isHTMLTableCaptionElement(node: Node): node is HTMLTableCaptionElement {
  return node.nodeName === 'CAPTION'
}

export function isHTMLTableColElement(node: Node): node is HTMLTableColElement {
  return node.nodeName === 'COL'
      || node.nodeName === 'COLGROUP'
}

export function isHTMLDataElement(node: Node): node is HTMLDataElement {
  return node.nodeName === 'DATA'
}

export function isHTMLDataListElement(node: Node): node is HTMLDataListElement {
  return node.nodeName === 'DATALIST'
}

export function isHTMLModElement(node: Node): node is HTMLModElement {
  return node.nodeName === 'DEL'
      || node.nodeName === 'INS'
}

export function isHTMLDetailsElement(node: Node): node is HTMLDetailsElement {
  return node.nodeName === 'DETAILS'
}

export function isHTMLDialogElement(node: Node): node is HTMLDialogElement {
  return node.nodeName === 'DIALOG'
}

export function isHTMLDirectoryElement(node: Node): node is HTMLDirectoryElement {
  return node.nodeName === 'DIR'
}

export function isHTMLDivElement(node: Node): node is HTMLDivElement {
  return node.nodeName === 'DIV'
}

export function isHTMLDListElement(node: Node): node is HTMLDListElement {
  return node.nodeName === 'DL'
}

export function isHTMLEmbedElement(node: Node): node is HTMLEmbedElement {
  return node.nodeName === 'EMBED'
}

export function isHTMLFieldSetElement(node: Node): node is HTMLFieldSetElement {
  return node.nodeName === 'FIELDSET'
}

export function isHTMLFontElement(node: Node): node is HTMLFontElement {
  return node.nodeName === 'FONT'
}

export function isHTMLFormElement(node: Node): node is HTMLFormElement {
  return node.nodeName === 'FORM'
}

export function isHTMLFrameElement(node: Node): node is HTMLFrameElement {
  return node.nodeName === 'FRAME'
}

export function isHTMLFrameSetElement(node: Node): node is HTMLFrameSetElement {
  return node.nodeName === 'FRAMESET'
}

export function isHTMLHeadingElement(node: Node): node is HTMLHeadingElement {
  return node.nodeName === 'H1'
      || node.nodeName === 'H2'
      || node.nodeName === 'H3'
      || node.nodeName === 'H4'
      || node.nodeName === 'H5'
      || node.nodeName === 'H6'
}

export function isHTMLHeadElement(node: Node): node is HTMLHeadElement {
  return node.nodeName === 'HEAD'
}

export function isHTMLHRElement(node: Node): node is HTMLHRElement {
  return node.nodeName === 'HR'
}

export function isHTMLHtmlElement(node: Node): node is HTMLHtmlElement {
  return node.nodeName === 'HTML'
}

export function isHTMLIFrameElement(node: Node): node is HTMLIFrameElement {
  return node.nodeName === 'IFRAME'
}

export function isHTMLImageElement(node: Node): node is HTMLImageElement {
  return node.nodeName === 'IMAGE'
}

export function isHTMLInputElement(node: Node): node is HTMLInputElement {
  return node.nodeName === 'INPUT'
}

export function isHTMLLabelElement(node: Node): node is HTMLLabelElement {
  return node.nodeName === 'LABEL'
}

export function isHTMLLegendElement(node: Node): node is HTMLLegendElement {
  return node.nodeName === 'LEGEND'
}

export function isHTMLLIElement(node: Node): node is HTMLLIElement {
  return node.nodeName === 'LI'
}

export function isHTMLLinkElement(node: Node): node is HTMLLinkElement {
  return node.nodeName === 'LINK'
}

export function isHTMLMapElement(node: Node): node is HTMLMapElement {
  return node.nodeName === 'MAP'
}

export function isHTMLMarqueeElement(node: Node): node is HTMLMarqueeElement {
  return node.nodeName === 'MARQUEE'
}

export function isHTMLMenuElement(node: Node): node is HTMLMenuElement {
  return node.nodeName === 'MENU'
}

export function isHTMLMetaElement(node: Node): node is HTMLMetaElement {
  return node.nodeName === 'META'
}

export function isHTMLMeterElement(node: Node): node is HTMLMeterElement {
  return node.nodeName === 'METER'
}

export function isHTMLObjectElement(node: Node): node is HTMLObjectElement {
  return node.nodeName === 'OBJECT'
}

export function isHTMLOListElement(node: Node): node is HTMLOListElement {
  return node.nodeName === 'OL'
}

export function isHTMLOptGroupElement(node: Node): node is HTMLOptGroupElement {
  return node.nodeName === 'OPTGROUP'
}

export function isHTMLOptionElement(node: Node): node is HTMLOptionElement {
  return node.nodeName === 'OPTION'
}

export function isHTMLOutputElement(node: Node): node is HTMLOutputElement {
  return node.nodeName === 'OUTPUT'
}

export function isHTMLParagraphElement(node: Node): node is HTMLParagraphElement {
  return node.nodeName === 'P'
}

export function isHTMLParamElement(node: Node): node is HTMLParamElement {
  return node.nodeName === 'PARAM'
}

export function isHTMLPictureElement(node: Node): node is HTMLPictureElement {
  return node.nodeName === 'PICTURE'
}

export function isHTMLPreElement(node: Node): node is HTMLPreElement {
  return node.nodeName === 'PRE'
}

export function isHTMLProgressElement(node: Node): node is HTMLProgressElement {
  return node.nodeName === 'PROGRESS'
}

export function isHTMLScriptElement(node: Node): node is HTMLScriptElement {
  return node.nodeName === 'SCRIPT'
}

export function isHTMLSelectElement(node: Node): node is HTMLSelectElement {
  return node.nodeName === 'SELECT'
}

export function isHTMLSlotElement(node: Node): node is HTMLSlotElement {
  return node.nodeName === 'SLOT'
}

export function isHTMLSourceElement(node: Node): node is HTMLSourceElement {
  return node.nodeName === 'SOURCE'
}

export function isHTMLSpanElement(node: Node): node is HTMLSpanElement {
  return node.nodeName === 'SPAN'
}

export function isHTMLStyleElement(node: Node): node is HTMLStyleElement {
  return node.nodeName === 'STYLE'
}

export function isHTMLTableElement(node: Node): node is HTMLTableElement {
  return node.nodeName === 'TABLE'
}

export function isHTMLTableSectionElement(node: Node): node is HTMLTableSectionElement {
  return node.nodeName === 'TBODY'
      || node.nodeName === 'TFOOT'
      || node.nodeName === 'THEAD'
}

export function isHTMLTableDataCellElement(node: Node): node is HTMLTableDataCellElement {
  return node.nodeName === 'TD'
}

export function isHTMLTemplateElement(node: Node): node is HTMLTemplateElement {
  return node.nodeName === 'TEMPLATE'
}

export function isHTMLTextAreaElement(node: Node): node is HTMLTextAreaElement {
  return node.nodeName === 'TEXTAREA'
}

export function isHTMLTableHeaderCellElement(node: Node): node is HTMLTableHeaderCellElement {
  return node.nodeName === 'TH'
}

export function isHTMLTimeElement(node: Node): node is HTMLTimeElement {
  return node.nodeName === 'TIME'
}

export function isHTMLTitleElement(node: Node): node is HTMLTitleElement {
  return node.nodeName === 'TITLE'
}

export function isHTMLTableRowElement(node: Node): node is HTMLTableRowElement {
  return node.nodeName === 'TR'
}

export function isHTMLTrackElement(node: Node): node is HTMLTrackElement {
  return node.nodeName === 'TRACK'
}

export function isHTMLUListElement(node: Node): node is HTMLUListElement {
  return node.nodeName === 'UL'
}

export function isHTMLVideoElement(node: Node): node is HTMLVideoElement {
  return node.nodeName === 'VIDEO'
}
