import {
  CharAt,
  Concat,
  EndsWith,
  Includes,
  IndexOf,
  Length,
  Repeat,
  Replace,
  ReplaceAll,
  Slice,
  Split,
  StartsWith,
  Trim,
  TrimEnd,
  TrimStart,
} from "./index.ts";
import { Equal, Expect } from "./utils.ts";

type test_Length = [
  Expect<Equal<Length<"">, 0>>,
  Expect<Equal<Length<"abc">, 3>>,
];

type test_Concat = [
  Expect<Equal<Concat<"", "">, "">>,
  Expect<Equal<Concat<"", "abc">, "abc">>,
  Expect<Equal<Concat<"abc", "">, "abc">>,
  Expect<Equal<Concat<"abc", "def">, "abcdef">>,
];

type test_CharAt = [
  Expect<Equal<CharAt<"abc", 0>, "a">>,
  Expect<Equal<CharAt<"abc", 1>, "b">>,
  Expect<Equal<CharAt<"abc", 2>, "c">>,
  Expect<Equal<CharAt<"abc", 3>, "">>,
  Expect<Equal<CharAt<"abc", 4>, "">>,
];

type test_Slice = [
  Expect<Equal<Slice<"abc", 0, 1>, "a">>,
  Expect<Equal<Slice<"abc", 0, 2>, "ab">>,
  Expect<Equal<Slice<"abc", 0, 3>, "abc">>,
  Expect<Equal<Slice<"abc", 0, 4>, "abc">>,
  Expect<Equal<Slice<"abc", 1, 2>, "b">>,
  Expect<Equal<Slice<"abc", 1, 3>, "bc">>,
  Expect<Equal<Slice<"abc", 1, 4>, "bc">>,
  Expect<Equal<Slice<"abc", 2, 3>, "c">>,
  Expect<Equal<Slice<"abc", 2, 4>, "c">>,
  Expect<Equal<Slice<"abc", 3, 4>, "">>,
  Expect<Equal<Slice<"abc", 4, 4>, "">>,
];

type test_Repeat = [
  Expect<Equal<Repeat<"abc", 0>, "">>,
  Expect<Equal<Repeat<"abc", 1>, "abc">>,
  Expect<Equal<Repeat<"abc", 2>, "abcabc">>,
  Expect<Equal<Repeat<"abc", 3>, "abcabcabc">>,
];

type test_Replace = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "x", "foo">, "foobarbar">>,
];

type test_ReplaceAll = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "">, "foo">>,
  Expect<Equal<ReplaceAll<"foobarbar", "x", "foo">, "foobarbar">>,
];

type test_Split = [
  Expect<Equal<Split<"foo,bar,baz", ",", []>, ["foo", "bar", "baz"]>>,
  Expect<Equal<Split<"foo", ",", []>, ["foo"]>>,
  Expect<Equal<Split<"", ",", []>, [""]>>,
];

type test_StartsWith = [
  Expect<Equal<StartsWith<"abc", "">, true>>,
  Expect<Equal<StartsWith<"abc", "a">, true>>,
  Expect<Equal<StartsWith<"abc", "b">, false>>,
];

type test_EndsWith = [
  Expect<Equal<EndsWith<"abc", "">, true>>,
  Expect<Equal<EndsWith<"abc", "c">, true>>,
  Expect<Equal<EndsWith<"abc", "b">, false>>,
];

type test_Includes = [
  Expect<Equal<Includes<"abc", "">, true>>,
  Expect<Equal<Includes<"abc", "a">, true>>,
  Expect<Equal<Includes<"abc", "b">, true>>,
  Expect<Equal<Includes<"abc", "c">, true>>,
  Expect<Equal<Includes<"abc", "d">, false>>,
];

type test_TrimStart = [
  Expect<Equal<TrimStart<"">, "">>,
  Expect<Equal<TrimStart<" ">, "">>,
  Expect<Equal<TrimStart<"  ">, "">>,
  Expect<Equal<TrimStart<" a">, "a">>,
  Expect<Equal<TrimStart<"  a">, "a">>,
  Expect<Equal<TrimStart<"  a ">, "a ">>,
];

type test_TrimEnd = [
  Expect<Equal<TrimEnd<"">, "">>,
  Expect<Equal<TrimEnd<" ">, "">>,
  Expect<Equal<TrimEnd<"  ">, "">>,
  Expect<Equal<TrimEnd<"a ">, "a">>,
  Expect<Equal<TrimEnd<"a  ">, "a">>,
  Expect<Equal<TrimEnd<" a ">, " a">>,
];

type test_Trim = [
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" ">, "">>,
  Expect<Equal<Trim<"  ">, "">>,
  Expect<Equal<Trim<" a">, "a">>,
  Expect<Equal<Trim<"  a">, "a">>,
  Expect<Equal<Trim<"  a ">, "a">>,
];

type test_IndexOf = [
  Expect<Equal<IndexOf<"abc", "a">, 0>>,
  Expect<Equal<IndexOf<"abc", "b">, 1>>,
  Expect<Equal<IndexOf<"abc", "c">, 2>>,
  Expect<Equal<IndexOf<"abc", "d">, -1>>,
];
