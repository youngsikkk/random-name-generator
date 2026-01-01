# @youngsikkk/random-name-generator

A lightweight random name generator for Korean and English names. Zero dependencies, works offline.

한국어와 영어 이름을 랜덤으로 생성하는 경량 라이브러리입니다. 의존성 없이 오프라인에서도 작동합니다.

---

## Installation / 설치

```bash
npm install @youngsikkk/random-name-generator
```

---

## Features / 특징

- Generate random Korean names (한국 이름 생성)
- Generate random English names (영어 이름 생성)
- Gender selection: male, female, or random (성별 선택 가능)
- Get full name, first name only, or last name only (풀네임, 이름만, 성만 선택 가능)
- TypeScript support (타입스크립트 지원)
- Zero dependencies (의존성 없음)
- Offline support (오프라인 지원)

---

## Data / 데이터

| Type | Count |
|------|-------|
| Korean surnames (한국 성씨) | 130 |
| Korean male names (한국 남자 이름) | 250 |
| Korean female names (한국 여자 이름) | 250 |
| English surnames (영어 성씨) | 130 |
| English male names (영어 남자 이름) | 250 |
| English female names (영어 여자 이름) | 250 |

**Data Sources / 데이터 출처:**
- Korean: Statistics Korea (통계청) common names
- English: US Census Bureau, SSA (Social Security Administration)

---

## Usage / 사용법

### Korean Names / 한국 이름

```typescript
import { korean } from '@youngsikkk/random-name-generator';

// Random gender / 랜덤 성별
korean();                    // "김민준"

// Specify gender / 성별 지정
korean('male');              // "박서준"
korean('female');            // "이서윤"

// Last name only / 성만
korean({ lastName: true });  // "김"

// First name only / 이름만
korean({ firstName: true });                      // "민준" (random gender)
korean({ firstName: true, gender: 'male' });      // "서준"
korean({ firstName: true, gender: 'female' });    // "서윤"

// Full name with specific gender / 풀네임 + 성별 지정
korean({ gender: 'male' });   // "최도윤"
korean({ gender: 'female' }); // "정예은"
```

### English Names / 영어 이름

```typescript
import { english } from '@youngsikkk/random-name-generator';

// Random gender / 랜덤 성별
english();                    // "James Smith"

// Specify gender / 성별 지정
english('male');              // "Michael Johnson"
english('female');            // "Emma Williams"

// Last name only / 성만
english({ lastName: true });  // "Johnson"

// First name only / 이름만
english({ firstName: true });                      // "Emily" (random gender)
english({ firstName: true, gender: 'male' });      // "William"
english({ firstName: true, gender: 'female' });    // "Sophia"

// Full name with specific gender / 풀네임 + 성별 지정
english({ gender: 'male' });   // "David Brown"
english({ gender: 'female' }); // "Olivia Davis"
```

### Access Raw Data / 원본 데이터 접근

```typescript
import {
  koreanLastNames,
  koreanMaleNames,
  koreanFemaleNames,
  englishLastNames,
  englishMaleNames,
  englishFemaleNames
} from '@youngsikkk/random-name-generator';

console.log(koreanLastNames.length);  // 130
console.log(koreanMaleNames.length);  // 250
```

---

## API Reference / API 레퍼런스

### `korean(options?)`

Generate a random Korean name.

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | `'male'` \| `'female'` \| `KoreanNameOptions` | Optional. Gender string or options object |

**KoreanNameOptions:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `gender` | `'male'` \| `'female'` | random | Gender of the name |
| `lastName` | `boolean` | `false` | Return only last name (성) |
| `firstName` | `boolean` | `false` | Return only first name (이름) |

**Returns:** `string`

---

### `english(options?)`

Generate a random English name.

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | `'male'` \| `'female'` \| `EnglishNameOptions` | Optional. Gender string or options object |

**EnglishNameOptions:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `gender` | `'male'` \| `'female'` | random | Gender of the name |
| `lastName` | `boolean` | `false` | Return only last name |
| `firstName` | `boolean` | `false` | Return only first name |

**Returns:** `string`

---

## Use Cases / 활용 사례

- Test data generation (테스트 데이터 생성)
- Mock user profiles (목업 사용자 프로필)
- Game character names (게임 캐릭터 이름)
- Sample data for demos (데모용 샘플 데이터)
- Placeholder content (플레이스홀더 콘텐츠)

---

## License / 라이선스

MIT
