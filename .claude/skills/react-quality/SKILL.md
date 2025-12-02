---
name: react-quality
description: Enforces React and TypeScript best practices, detects anti-patterns, and ensures code quality. Use when reviewing components, refactoring code, or validating implementations. Triggers on code review requests, quality checks, or React-specific questions.
---

# React Quality Skill

Enforce best practices and maintain high code quality in React/TypeScript applications.

## Code Quality Checklist

### TypeScript

#### Strict Mode Requirements
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### Type Best Practices
- [ ] All props are typed with interfaces
- [ ] No `any` types (use `unknown` if needed)
- [ ] Return types specified on functions
- [ ] Generic types used appropriately
- [ ] Type guards for runtime checks

### React Patterns

#### Component Structure
```tsx
// Good: Typed functional component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
}) => {
  // Component logic
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getVariantClasses(variant)}
    >
      {children}
    </button>
  );
};
```

#### Props Best Practices
- [ ] Use destructuring with defaults
- [ ] Avoid prop drilling (use context)
- [ ] Children typed as `React.ReactNode`
- [ ] Event handlers properly typed
- [ ] Optional props have defaults

### React Anti-Patterns to Avoid

#### 1. Index as Key
```tsx
// BAD
{items.map((item, index) => (
  <Item key={index} {...item} />
))}

// GOOD
{items.map((item) => (
  <Item key={item.id} {...item} />
))}
```

#### 2. Inline Object/Array in Render
```tsx
// BAD - Creates new object every render
<Component style={{ color: 'red' }} />

// GOOD - Stable reference
const style = { color: 'red' };
<Component style={style} />

// OR use useMemo for dynamic values
const style = useMemo(() => ({ color }), [color]);
```

#### 3. Missing Dependencies in Hooks
```tsx
// BAD - Missing dependency
useEffect(() => {
  fetchData(userId);
}, []); // userId should be in deps

// GOOD
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

#### 4. State Updates in Render
```tsx
// BAD - Causes infinite loop
const [count, setCount] = useState(0);
setCount(count + 1); // In render body!

// GOOD - In event handler or effect
const handleClick = () => setCount(count + 1);
```

#### 5. Direct DOM Manipulation
```tsx
// BAD
document.getElementById('myDiv').innerHTML = 'Hello';

// GOOD - Use refs
const divRef = useRef<HTMLDivElement>(null);
// ... use divRef.current
```

### Hooks Best Practices

#### useState
```tsx
// Prefer derived state over multiple states
// BAD
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState('');

// GOOD
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const fullName = `${firstName} ${lastName}`;
```

#### useEffect
```tsx
// Always clean up side effects
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);

// Split unrelated effects
useEffect(() => { /* fetch data */ }, [id]);
useEffect(() => { /* track analytics */ }, [page]);
```

#### useCallback / useMemo
```tsx
// Use for expensive calculations
const sortedList = useMemo(
  () => items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);

// Use for stable callback references
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

#### Custom Hooks
```tsx
// Extract reusable logic
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

### Error Handling

#### Error Boundaries
```tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

#### Async Error Handling
```tsx
const [error, setError] = useState<Error | null>(null);
const [loading, setLoading] = useState(false);

const fetchData = async () => {
  setLoading(true);
  setError(null);
  try {
    const data = await api.get('/endpoint');
    setData(data);
  } catch (err) {
    setError(err instanceof Error ? err : new Error('Unknown error'));
  } finally {
    setLoading(false);
  }
};
```

### Performance Patterns

#### Lazy Loading
```tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

#### Virtualization for Long Lists
```tsx
// Use react-window or similar for 100+ items
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={400}
  itemCount={items.length}
  itemSize={50}
>
  {({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  )}
</FixedSizeList>
```

#### React.memo for Pure Components
```tsx
const ExpensiveComponent = React.memo(({ data }) => {
  // Only re-renders when data changes
  return <div>{/* complex rendering */}</div>
});
```

### Security Best Practices

#### Avoid dangerouslySetInnerHTML
```tsx
// BAD - XSS vulnerability
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// GOOD - Sanitize first
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{
  __html: DOMPurify.sanitize(userContent)
}} />

// BEST - Use text content
<div>{userContent}</div>
```

#### Environment Variables
```tsx
// Never expose secrets to client
// BAD
const apiKey = process.env.API_KEY;

// GOOD - Only VITE_ prefixed vars are exposed
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
```

### Code Organization

#### File Structure
```
components/
├── Button/
│   ├── Button.tsx        # Component
│   ├── Button.test.tsx   # Tests
│   ├── Button.stories.tsx # Storybook
│   └── index.ts          # Export
```

#### Export Pattern
```tsx
// components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

### Quality Checklist

- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] All props typed
- [ ] No `any` types
- [ ] Keys are unique identifiers
- [ ] Effects have cleanup
- [ ] No memory leaks
- [ ] Error boundaries in place
- [ ] Loading states handled
- [ ] Error states handled
- [ ] Accessible (ARIA, roles)
- [ ] Tested (unit + integration)
