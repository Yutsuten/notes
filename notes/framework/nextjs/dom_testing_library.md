---
title: DOM Testing Library
ref: https://testing-library.com/docs/
---

## Usage

When creating tests using `DOM Testing Library`,
you should avoid using `element.getElementsBy*` and the likes.
Prefer using the options given by the library.

> The more your tests resemble the way your software is used, the more confidence they can give you.

## First option: getByRole

[List of roles](https://www.w3.org/TR/html-aria/#dpub-usage-note)

| User action | HTML | Test |
| --- | --- | --- |
| Button click | `<button>Submit</button>` | `fireEvent.click(screen.getByRole('button', { name: 'Submit' }))` |
| Insert text | `<label htmlFor="inputid">Message</label><input id="inputid" type="text" />` | `fireEvent.change(screen.getByRole('textbox', { name: 'Message' }), { target: { value: 'Text to be inserted' } })` |
| Check radio button | `<input id="inputid" type="radio" /><label htmlFor="inputid">Option A</label>` | `fireEvent.click(screen.getByRole('radio', { name: 'Option A' }))` |
| Get almost any element | `<input aria-label="no-label-or-placeholder" />` | `screen.getByRole('textbox', { name: 'no-label-or-placeholder' })` |

## Second option: getByPlaceholderText

When there is no `<label>`, aria-label, and we want to get it by `placeholder`.

| User action | HTML | Test |
| --- | --- | --- |
| Insert text | `<input placeholder="Name" />` | `fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Suguri' } })` |

## Third option: getByText

When role is `generic` (like `div`).

| User action | HTML | Test |
| --- | --- | --- |
| Click a `div` | `<div onClick="doSomething()">Click me</div>` | `fireEvent.click(screen.getByText('Click me'))` |

## Fourth option: getByTitle

When role is `generic` and there is no text.

::: info
`title` is a tooltip that appears to users on hover.
:::

| User action | HTML | Test |
| --- | --- | --- |
| Click a `div` | `<div onClick="doSomething()" title="Toggle menu"><i class="icon" /></div>` | `fireEvent.click(screen.getByTitle('Toggle menu'))` |

## Last option: getByTestId

When role is `generic`, there is no text and we don't want to insert a title.

Probably should only be used to click icons.

| User action | HTML | Test |
| --- | --- | --- |
| Click a `div` | `<div onClick="doSomething()" data-testid="toggle-menu"><i class="icon" /></div>` | `fireEvent.click(screen.getByTestId('toggle-menu'))` |
