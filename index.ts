export type Length<Str extends string, _Count extends 1[] = []> =
  Str extends `${infer _Start}${infer Rest}`
    ? Length<Rest, [..._Count, 1]>
    : _Count["length"];

export type Concat<Str1 extends string, Str2 extends string> = `${Str1}${Str2}`;

export type CharAt<
  Str extends string,
  Index extends number,
  _Count extends 1[] = [],
> = _Count["length"] extends Index
      ? Str extends `${infer First}${infer _Rest}`
        ? First
        : ""
      : Str extends `${infer _First}${infer Rest}`
        ? CharAt<Rest, Index, [..._Count, 1]>
        : "";

type Drop<
  Str extends string,
  N extends number,
  _Count extends 1[] = [],
> = _Count["length"] extends N
    ? Str
    : Str extends `${infer _First}${infer Rest}`
      ? Drop<Rest, N, [..._Count, 1]>
      : "";
type Take<
  Str extends string,
  N extends number,
  _Count extends 1[] = [],
> = _Count["length"] extends N
      ? ""
      : Str extends `${infer First}${infer Rest}`
        ? `${First}${Take<Rest, N, [..._Count, 1]>}`
        : "";
export type Slice<
  Str extends string,
  Start extends number,
  End extends number,
> = Drop<Take<Str, End>, Start>;

export type Repeat<
  Str extends string,
  N extends number,
  _Count extends 1[] = [],
> = _Count["length"] extends N
      ? ""
      : `${Str}${Repeat<Str, N, [..._Count, 1]>}`;

export type Replace<
  Str extends string,
  Pattern extends string,
  Replacement extends string,
> = Str extends `${infer Start}${Pattern}${infer Rest}`
      ? `${Start}${Replacement}${Rest}`
      : Str;

export type ReplaceAll<
  Str extends string,
  Pattern extends string,
  Replacement extends string,
> = Str extends `${infer Start}${Pattern}${infer Rest}`
      ? ReplaceAll<`${Start}${Replacement}${Rest}`, Pattern, Replacement>
      : Str;

export type Split<
  Str extends string,
  Separator extends string,
  _Result extends string[] = [],
> = Str extends `${infer Start}${Separator}${infer Rest}`
      ? Split<Rest, Separator, [..._Result, Start]>
      : [..._Result, Str];

export type StartsWith<Str extends string, SearchStr extends string> =
  Str extends `${SearchStr}${infer _Rest}`
    ? true
    : false;

export type EndsWith<Str extends string, SearchStr extends string> =
  Str extends `${infer _Start}${SearchStr}`
    ? true
    : false;

export type Includes<Str extends string, SearchStr extends string> =
  Str extends `${infer _Start}${SearchStr}${infer _Rest}`
    ? true
    : false;

export type TrimStart<Str extends string> =
  Str extends ` ${infer Rest}`
    ? TrimStart<Rest>
    : Str;

export type TrimEnd<Str extends string> =
  Str extends `${infer Rest} `
    ? TrimEnd<Rest>
    : Str;

export type Trim<Str extends string> = TrimStart<TrimEnd<Str>>;

export type IndexOf<Str extends string, SearchStr extends string> =
  Str extends `${infer Start}${SearchStr}${infer _Rest}`
    ? Length<Start>
    : -1;
