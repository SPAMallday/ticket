// 서버에서 내려주는 응답 구조
export interface APIResponse<T> {
    // statusCode: number; // 서버상태코드
    msg: string; // 메시지
    result: T; // 데이터 내용
}
