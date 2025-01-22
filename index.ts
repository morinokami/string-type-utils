export type Length<Str extends string, Count extends unknown[] = []> =
  Str extends `${infer _Head}${infer Tail}` ? Length<Tail, [...Count, unknown]>
    : Count["length"];

export type Concat<Str1 extends string, Str2 extends string> = `${Str1}${Str2}`;

export type CharAt<
  Str extends string,
  Index extends number,
  Current extends unknown[] = [],
> = Current["length"] extends Index
  ? Str extends `${infer First}${infer _Rest}` ? First : ""
  : Str extends `${infer _First}${infer Rest}`
    ? CharAt<Rest, Index, [...Current, unknown]>
  : "";

type Drop<
  Str extends string,
  N extends number,
  Count extends 1[] = [],
> = Count["length"] extends N ? Str
  : Str extends `${infer _First}${infer Rest}` ? Drop<Rest, N, [...Count, 1]>
  : "";
type Take<
  Str extends string,
  N extends number,
  Count extends 1[] = [],
> = Count["length"] extends N ? ""
  : Str extends `${infer First}${infer Rest}`
    ? `${First}${Take<Rest, N, [...Count, 1]>}`
  : "";
export type Slice<
  Str extends string,
  Start extends number,
  End extends number,
> = Drop<Take<Str, End>, Start>;

export type Repeat<
  Str extends string,
  N extends number,
  Count extends 1[] = [],
> = Count["length"] extends N ? "" : `${Str}${Repeat<Str, N, [...Count, 1]>}`;

export type Replace<
  Str extends string,
  Pattern extends string,
  Replacement extends string,
> = Str extends `${infer Start}${Pattern}${infer End}`
  ? `${Start}${Replacement}${End}`
  : Str;

export type ReplaceAll<
  Str extends string,
  Pattern extends string,
  Replacement extends string,
> = Str extends `${infer Start}${Pattern}${infer End}`
  ? ReplaceAll<`${Start}${Replacement}${End}`, Pattern, Replacement>
  : Str;

export type Split<
  Str extends string,
  Separator extends string,
  Result extends string[] = [],
> = Str extends `${infer Start}${Separator}${infer End}`
  ? Split<End, Separator, [...Result, Start]>
  : [...Result, Str];

export type StartsWith<Str extends string, SearchStr extends string> =
  Str extends `${SearchStr}${infer _End}` ? true : false;

export type EndsWith<Str extends string, SearchStr extends string> = Str extends
  `${infer _Start}${SearchStr}` ? true : false;

export type Includes<Str extends string, SearchStr extends string> = Str extends
  `${infer _Start}${SearchStr}${infer _End}` ? true : false;

export type TrimStart<Str extends string> = Str extends ` ${infer Rest}`
  ? TrimStart<Rest>
  : Str;

export type TrimEnd<Str extends string> = Str extends `${infer Rest} `
  ? TrimEnd<Rest>
  : Str;

export type Trim<Str extends string> = TrimStart<TrimEnd<Str>>;

export type IndexOf<Str extends string, SearchStr extends string> = Str extends
  `${infer Start}${SearchStr}${infer _End}` ? Length<Start> : -1;
